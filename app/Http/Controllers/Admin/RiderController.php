<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreRiderRequest;
use App\Mail\AdminInvite;
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

    public function getAvailableRiders()
    {
        $riders = User::where(function($query) {
            $query->where('role_id', 2)
                ->where('is_available', true);
        })
            ->oldest('updated_at')
            ->get();
            
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

        $order->update(['rider_id' => $rider->id]);

        // notifications
        $this->_sendNotifications($rider, $order);

        $this->success();

    }

    private function _sendNotifications($user, $order)
    {
        $title = 'Rider Assigned';
        $message1 = 'A rider has just been assigned to Order';
        $message2 = "A new Order has been placed by $user->first_name $user->last_name ($user->email)";

        // rider mail/notification


        // admin mail/notification

        $data = [
            'token' => auth()->user()->fcm_token,
            'notification' => [
                'title' => $title,
                'body' => $message2,
                // 'time' => now(),
                // 'date' => now()->toFormattedDateString(),
            ],
            'data' => $order,
        ];
        $this->sendPushNotification($data);
    }
}
