<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use App\Http\Requests\CreateOrderRequest;
use App\Http\Requests\TrackOrderRequest;
use App\Http\Requests\UpdateOrderReceiverRequest;
use App\Http\Requests\UpdateOrderRequest;
use App\Http\Requests\UpdateOrderRiderRequest;
use App\Http\Requests\VerifyPaymentRequest;
use App\Http\Resources\OrderResource;
use App\Models\Order;
use App\Models\OrderItem;
use App\Traits\ParseResponse;
use App\Utils\TransRef;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Log;

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
        $tracking_number = now()->valueOf();
        $tx_ref = $this->generateTxRef();

        $order_type = $request->order_type == 1 ? 'Dispatch' : 'Errand';
        $payment_method = $request->payment_method == 1 ? 'Paystack' : 'Pay On Delivery';
        
        switch ($request->personnel_option) {
            case 1:
                $personnel_option = 'Sender';
            case 2:
                $personnel_option = 'Receiver';
            case 3:
                $personnel_option = 'Third-party';
        } 

        // TODO: refactor pickup_location and dropoff_location to spatial data type  
        // $pickup_location = new Point($request->pickup_location['latitude'], $request->location['longitude']);
        // $dropoff_location = new Point($request->dropoff_location['latitude'], $request->location['longitude']);

        try {
            DB::beginTransaction();

            $order = Order::create([
                'user_id' => auth()->id(),
                'pickup_location' => $request->pickup_location['latitude'], // 'pickup_location' => $pickup_location,
                'dropoff_location' => $request->dropoff_location['longitude'], // 'dropoff_location' => $dropoff_location,
                'pickup_address' => $request->pickup_location['address'],
                'dropoff_address' => $request->dropoff_location['address'],
                'sender_name' => $request->sender_name,
                'sender_mobile' => $request->sender_mobile,
                'receiver_name' => $request->receiver_name,
                'receiver_mobile' => $request->receiver_mobile,
                'delivery_note' => $request->delivery_note,
                'tracking_number' => $tracking_number,
                'order_status' => 'Created',
                'order_type' => $order_type,
                'payment_method' => $payment_method,
                'personnel_option' => $personnel_option,
                'transaction_ref' => $tx_ref,
            ]);

            // order items
            foreach($request->orderItems as $orderItem) {
                OrderItem::create([
                    'order_id' => $order->id,
                    'item' => $orderItem['item'],
                    'quantity' => $orderItem['quantity'],
                    'description' => $orderItem['description'],
                    'price' => $orderItem['price'],
                ]);
            }

            DB::commit();

            $total_amount = $order->getTotalPrice();

            return $this->success([
                'order_id' => $order['id'],
                'total_amount' => $total_amount,
                'transaction_reference' => $tx_ref,
            ], 'Order Created!', 201);

        } catch(\Exception $e) {
            DB::rollBack();
            Log::info($e->getMessage());
        }
    }

    // POST - verify payment /api/verify_transaction?reference=reference
    public function verifyPayment(VerifyPaymentRequest $request)
    {
        $data = $request->validated();
        $order = Order::findOrFail($data['order_id']);
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

    public function trackOrder(TrackOrderRequest $request) {
        $data = $request->validated();

        $order = Order::where('tracking_number', $data['tracking_number'])->first();

        return $this->success([
            'order_status' => $order->order_status
        ]);
    }

    public function updateOrderRider(UpdateOrderRiderRequest $request)
    {
        $data = $request->validated();

        $order = Order::findOrFail($data['order_id']);
        $order->updateOrderRider($data['rider_id']);
        
        return $this->success(null, 'Rider details Updated!');
    }

    public function getAvailableRiders()
    {
        // TODO: getAvailableRiders
    }

    private function generateTxRef()
    {
        $reference = TransRef::getHashedToken();
        return $reference;
    }
}
