<?php

namespace App\Http\Controllers\Rider;

use App\Http\Controllers\Controller;
use App\Http\Resources\OrderResource;
use App\Models\Order;
use App\Traits\ParseResponse;
use Illuminate\Http\Request;

class OrderController extends Controller
{
    use ParseResponse;

    // get all rider orders
    public function getRiderOrders()
    {
        $orders = Order::where('rider_id', auth()->id())
            ->latest()
            ->get();

        return OrderResource::collection($orders);
    }

    public function getOrderById($id)
    {
        $order = Order::findOrFail($id);
        return new OrderResource($order);
    }

    // update order status
    public function updateOrderStatus(Request $request, $id)
    {
        $order = Order::findOrFail($id);

        $order->update([
            'order_status' => $request->order_status
        ]);

        return $this->success();
    }

    // update availability
    public function updateAvailableStatus()
    {
        $rider = auth()->user()->profile;
        
        if ($rider->is_available) {
            $rider->is_available = 0;
        } else {
            $rider->is_available = 1;
        }

        $rider->save();

        return $this->success();
    }
}
