<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use App\Http\Requests\CreateOrderRequest;
use App\Http\Requests\UpdateOrderReceiverRequest;
use App\Http\Requests\UpdateOrderRequest;
use App\Http\Requests\UpdateOrderRiderRequest;
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

        $tracking_number = now()->valueOf();
        $tx_ref = $this->generateTxRef();

        // calculate price
        $amount = $this->calculateOrderAmount();

        $order = Order::create([
            'user_id' => auth()->id(),
            'item' => $data['item'],
            'quantity' => $data['quantity'],
            'price' => $amount,
            'description' => $data['description'],
            'pickup_location' => $request->pickup_location,
            'dropoff_location' => $request->dropoff_location,
            'payment_method' => $data['payment_method'], // 'Paystack', 'Pay On Delivery'
            'transaction_ref' => $tx_ref,
            'tracking_number' => $tracking_number,
            'order_type' => $data['order_type'], // 'Order', 'Dispatch'
            'order_status' => 'Created',
        ]);

        return $this->success([
            'order_id' => $order['id'],
            'amount' => $amount,
            'transaction_reference' => $tx_ref,
        ], 'Order Created!', 201);
    }

    public function updateOrderReceiver(UpdateOrderReceiverRequest $request) 
    {
        $data = $request->validated();

        $order = Order::findOrFail($data['order_id']);
        $order->updateOrderReceiver($data);

        return $this->success(null, 'Receiver details Updated!');
    }

    public function updateOrderRider(UpdateOrderRiderRequest $request)
    {
        $data = $request->validated();

        $order = Order::findOrFail($data['order_id']);
        $order->updateOrderRider($data['rider_id']);
        
        return $this->success(null, 'Rider details Updated!');
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

    public function trackOrder(Request $request) {
        $data = $request->validate([
            'tracking_number' => $request->tracking_number,
        ]);

        $order = Order::where('tracking_number', $data['tracking_number'])->first();
        return $this->success($data=[
            'status' => $order->order_status
        ]);
    }

    public function getAvailableRiders()
    {

    }
    
    private function calculatePickupDropoffDistance()
    {
        
    }
    
    private function calculateOrderAmount()
    {
        return 300.75;
    }

    private function generateTxRef()
    {
        $reference = TransRef::getHashedToken();
        return $reference;
    }
}
