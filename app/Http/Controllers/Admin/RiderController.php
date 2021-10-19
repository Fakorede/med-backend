<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreRiderRequest;
use App\Mail\AdminInvite;
use App\Mail\RiderAssigned;
use App\Models\AdminInvitation;
use App\Models\Order;
use App\Models\User;
use App\Traits\ParseResponse;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Mail;

class RiderController extends Controller
{
    use ParseResponse;

    public function riders($per_page=10)
    {
        $users = User::where('role_id', 2)->latest()->paginate($per_page);
        return response()->json($users, Response::HTTP_OK);
    }

    public function getAvailableRiders($order_id)
    {
        $order = Order::select([
            'pickup_location_longitude', 'pickup_location_latitude', 'dropoff_location_longitude', 'dropoff_location_latitude',
        ])
            ->whereId($order_id)
            ->first();

        $riders = User::where(function($query) {
            $query->where('role_id', 2)
                ->where('is_available', true);
        })
            ->oldest('updated_at')
            ->get();

        $riders = $riders->map(function($rider) use ($order) {
            $distance = $this->_calculateDistance2(
                $order->pickup_location_latitude, $order->pickup_location_longitude, $rider->location_latitude, $rider->location_longitude
            );
            
            $rider['distance'] = round($distance, 4) . 'km';
            return $rider;
        });

        return response()->json($riders, Response::HTTP_OK);
    }

    public function assignRider(Request $request)
    {
        $validated = $request->validate([
            'order_id' => 'required',
            'rider_id' => 'required',
        ]);

        $order = Order::whereId($validated['order_id'])->firstOrFail();
        $rider = User::whereId($validated['rider_id'])->where('role_id', 2)->firstOrFail();

        $order->update([
            'rider_id' => $rider->id,
            'order_status' => Controller::ORDER_STATUS_3,
        ]);

        // notifications
        $result = $this->_sendNotifications($rider, $order);

        return $this->success(null, 'Order assigned to rider successfully');

    }

    private function _sendNotifications($rider, $order)
    {
        Mail::to($order->user->email)
            ->send(new RiderAssigned($order));

        Mail::to($order->$rider->email)
            ->send(new RiderAssigned($order));

        // rider notification
        $title1 = 'Order Assigned';
        $message1 = 'An order has just been assigned to you';

        $data1 = [
            'to' => $rider->fcm_token,
            'priority'=> 'high',
            'notification' => [
                'title' => $title1,
                'body' => $message1,
            ],
            'data' => $order->load(['rider', 'user', 'order_items']),
        ];

        $res1 = $this->sendPushNotification($data1);

        // user notification
        $title2 = 'Rider Assigned';
        $message2 = 'A rider has just been assigned to your Order';

        $data2 = [
            'to' => $order->user->fcm_token,
            'priority'=> 'high',
            'notification' => [
                'title' => $title2,
                'body' => $message2,
            ],
            'data' => $order->load(['rider', 'user']),
        ];
        
        $res2 = $this->sendPushNotification($data2);

        // return responses
        return [$res1, $res2];
    }
}
