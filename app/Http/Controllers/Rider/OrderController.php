<?php

namespace App\Http\Controllers\Rider;

use Carbon\Carbon;
use App\Http\Controllers\Controller;
use App\Http\Controllers\User\OrderController as UserOrderController;
use App\Http\Resources\OrderResource;
use App\Http\Resources\SummarizedOrderResource;
use App\Models\Order;
use App\Traits\ParseResponse;
use Illuminate\Http\Request;

class OrderController extends Controller
{
    use ParseResponse;

    public $orderCtl;

    public function __construct(UserOrderController $orderCtl)
    {
        $this->orderCtl = $orderCtl;
    }

    // get all rider orders
    public function getRiderOrders()
    {
        $orders = Order::where('rider_id', auth()->id())
            ->latest()
            ->get();

        return SummarizedOrderResource::collection($orders);
    }

    public function getOrderById($id)
    {
        return $this->orderCtl->getOrderById($id);
    }

    // update order payment
    public function updatePaymentStatus($id)
    {
        $order = Order::findOrFail($id);

        $date = Carbon::now();

        if ($order->payment_method === Controller::PAYMENT_METHOD_2) {
            $order->updatePaidOrder($date, false);
            return $this->success(null, 'Payment updated successfully');
        }
        
        return $this->error();
    }

    // update order status
    public function updateOrderStatus(Request $request, $id)
    {
        $order = Order::findOrFail($id);

        $date = Carbon::now();

        $order->update([
            'order_status' => $request->order_status,
            'delivered_at' => $request->order_status === Controller::ORDER_STATUS_5 ? $date : null,
        ]);

        if ($request->order_status === Controller::ORDER_STATUS_4) {
            $this->_pickupNotification($order);
        }

        if ($request->order_status === Controller::ORDER_STATUS_5) {
            $this->_deliveredNotification($order);
        }

        return $this->success();
    }

    // update availability
    public function updateAvailableStatus(Request $request)
    {
        $this->validate($request, [
            'is_available' => 'required|boolean',
        ]);

        auth()->user()->update([
            'is_available' => $request->is_available,
        ]);

        return $this->success();
    }

    private function _pickupNotification($order)
    {
        $title = 'Order Pickup';
        $message = 'Rider has confirmed order pickup and is currently in transit';

        // push notification
        $data = [
            'to' => $order->user->fcm_token,
            'priority'=> 'high',
            'notification' => [
                'title' => $title,
                'body' => $message,
            ],
            'data' => $order->load(['rider', 'user']),
        ];

        $res = $this->sendPushNotification($data);

        return $res;
    }

    private function _deliveredNotification($order)
    {
        $title = 'Order Completed';
        $message = 'Rider has confirmed order delivery';

        // push notification
        $data = [
            'to' => $order->user->fcm_token,
            'priority'=> 'high',
            'notification' => [
                'title' => $title,
                'body' => $message,
            ],
            'data' => $order->load(['rider', 'user']),
        ];

        $res = $this->sendPushNotification($data);

        return $res;
    }
}
