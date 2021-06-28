<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use App\Http\Requests\CreateOrderRequest;
use App\Http\Requests\UpdateOrderRequest;
use App\Http\Resources\OrderResource;
use App\Models\Order;
use App\Traits\ParseResponse;
use App\Utils\TransRef;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;

class OrderController extends Controller
{
    use ParseResponse;

    public function getOrderById($id)
    {
        $order = Order::findOrFail($id);
        return new OrderResource($order);
    }

    // get auth user orders
    public function getUserOrders()
    {
        $orders = Order::where('user_id', auth()->id())
            ->latest()
            ->get();

        return OrderResource::collection($orders);
    }

    public function placeOrder(CreateOrderRequest $request) 
    {
        $data = $request->validated();

        // generate order/tracking no
        $tracking_number = rand();
        $tx_ref = $this->generateTxRef();

        $order = Order::create([
            'user_id' => auth()->id(),
            'rider_id' => $data['rider_id'],
            'tracking_number' => $tracking_number,
            'order_type' => $data['order_type'], // 'Order'
            'order_status' => 'Created',
            'item' => $data['item'],
            'quantity' => $data['quantity'],
            'price' => $data['price'],
            'description' => $data['description'],
            'pickup_location' => $data['pickup_location'],
            'dropoff_location' => $data['dropoff_location'],
            'payment_method' => $data['payment_method'], // 'Paystack',
            'transaction_ref' => $tx_ref,
        ]);

        return new OrderResource($order);
    }

    public function updateOrderReceiver(UpdateOrderRequest $request, $id) 
    {
        $data = $request->validated();

        $order = Order::findOrFail($id);

        $order->update([
            'order_type' => $data['order_type'], // 'Dispatch'
            'receiver_name' => $data['receiver_name'],
            'receiver_mobile' => $data['receiver_mobile'],
            'payment_method' => $data['payment_method'], // 'Paystack', 'Pay On Delivery'
        ]);

        return $this->success(null, 'Receiver details Updated');
    }

    public function updateOrderRider($id)
    {
        $order = Order::findOrFail($id);

        // TODO: update w rider details
        
        return $this->success(null, 'Rider details Updated');
    }

    // POST - verify payment /api/verify_transaction?reference=reference
    public function verifyPayment(Request $request)
    {
        $data = $request->validate([
            'orderId' => ['required'],
            'reference' => ['required'],
            'paid_at' => ['required'],
        ]);

        $order = Order::findOrFail($data['orderId']);
        $tx_ref = $data['reference'];

        //$tx_ref = $request->query('reference');

        $response = Http::withHeaders([
            'Authorization' => 'Bearer ' . config('paystack.secretKey'),
            'Content-Type'  => 'application/json',
            'Accept'        => 'application/json'
        ])->get(config('paystack.paymentUrl') . "/verify/{$tx_ref}");

        if (
            $response['message'] === 'Verification successful' 
            && $response['data']['status'] === 'success'
        ) {
            $order->updatePaidOrder($data['paid_at']);
            return $this->success('Successful');
        } else if (
            $response['message'] === 'Verification successful' 
            && $response['data']['status'] === 'failed'
        ) {
            return $this->error($data='Insufficient Funds');
        } else {
            return $this->error($data='Invalid key'); // Invalid Transaction Reference
        } 
    }

    public function getAvailableRiders()
    {

    }
    
    public function calculatePickupDropoffDistance()
    {
        
    }
    
    public function calculateOrderAmount()
    {

    }

    public function trackOrder(Request $request) {
        $data = $request->validate([
            'tracking_number' => $request->tracking_number,
        ]);

        $order = Order::where('tracking_number', $data['tracking_number'])->first();
        return $this->success($data=[
            'status' => $order->order_status
        ]);
    }

    public function generateTxRef()
    {
        $reference = TransRef::getHashedToken();
        return $reference;
    }
}
