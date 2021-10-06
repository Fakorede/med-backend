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
use App\Http\Resources\SummarizedOrderResource;
use App\Mail\AdminOrderCreated;
use App\Mail\OrderCreated;
use App\Models\Order;
use App\Models\OrderItem;
use App\Models\User;
use App\Notifications\AdminOrderNotification;
use App\Notifications\OrderNotification;
use App\Notifications\RealTimeNotification;
use App\Notifications\SendPushNotification;
use App\Traits\ParseResponse;
use App\Utils\TransRef;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Notification;

class OrderController extends Controller
{
    use ParseResponse;

    public function getOrderById($id)
    {
        $order = Order::with(['order_items', 'user', 'rider'])->findOrFail($id);
        $this->authorize('view-order', $order);
        return new OrderResource($order);
    }

    // get auth user orders
    public function getUserOrders()
    {
        $orders = Order::where('user_id', auth()->id())
            ->latest()
            ->get();

        return SummarizedOrderResource::collection($orders);
    }

    public function placeOrder(CreateOrderRequest $request) 
    {
        $this->authorize('create-order');

        $user = auth()->user();
        $tracking_number = now()->valueOf();
        $tx_ref = $this->generateTxRef();

        $order_type = $request->order_type == 1 ? Controller::ORDER_TYPE_1 : Controller::ORDER_TYPE_2;
        $payment_method = $request->payment_method == 1 ? Controller::PAYMENT_METHOD_1 : Controller::PAYMENT_METHOD_2;
        
        switch ($request->personnel_option) {
            case 1:
                $personnel_option = Controller::PERSONNEL_OPTION_1;
            case 2:
                $personnel_option = Controller::PERSONNEL_OPTION_2;
            case 3:
                $personnel_option = Controller::PERSONNEL_OPTION_3;
        } 

        // TODO: refactor pickup_location and dropoff_location to spatial data type  
        // $pickup_location = new Point($request->pickup_location['latitude'], $request->location['longitude']);
        // $dropoff_location = new Point($request->dropoff_location['latitude'], $request->location['longitude']);

        try {
            DB::beginTransaction();

            $order = Order::create([
                'user_id' => $user->id,
                // 'pickup_location' => $pickup_location,
                'pickup_location_longitude' => $request->pickup_location['longitude'], 
                'pickup_location_latitude' => $request->pickup_location['latitude'], 
                // 'dropoff_location' => $dropoff_location,
                'dropoff_location_longitude' => $request->dropoff_location['longitude'], 
                'dropoff_location_latitude' => $request->dropoff_location['latitude'], 
                'pickup_address' => $request->pickup_location['address'],
                'dropoff_address' => $request->dropoff_location['address'],
                'total_price' => $request->total_price,
                'sender_name' => $request->sender_name,
                'sender_mobile' => $request->sender_mobile,
                'receiver_name' => $request->receiver_name,
                'receiver_mobile' => $request->receiver_mobile,
                'delivery_note' => $request->delivery_note,
                'store_name' => $request->store_name,
                'tracking_number' => $tracking_number,
                'order_status' => Controller::ORDER_STATUS_1,
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

            $result = $this->_sendNotifications($user, $order);

            return $this->success([
                'order_id' => $order['id'],
                'total_amount' => $order['total_price'],
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

        $response = Http::withHeaders([
            'Authorization' => 'Bearer ' . config('paystack.secretKey'),
            'Content-Type'  => 'application/json',
            'Accept'        => 'application/json'
        ])->get(config('paystack.paymentUrl') . "/verify/{$tx_ref}");

        if (
            $response['message'] === 'Verification successful' 
            && $response['data']['status'] === 'success'
        ) {
            $order->updatePaidOrder($response['data']['transaction_date']);
            return $this->success(null, 'Verification successful');
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

        if($order) {
            return $this->success([
                'order_status' => $order->order_status
            ]);
        } else {
            return $this->error($data='Incorrect Tracking Number');
        }
        
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

    private function _sendNotifications($user, $order)
    {
        $title = 'New Order Created';
        $message1 = 'You just placed an Order';
        $message2 = "A new Order has been placed by $user->first_name $user->last_name ($user->email)";
        
        // current user mail/notification
        Mail::to(auth()->user())->send(new OrderCreated($title, $message1, $order));
        auth()->user()->notify(new OrderNotification($title, $message1, $order));

        // admin mail/notification
        $users = User::where('role_id', 1)->get();

        Mail::to($users)->send(new AdminOrderCreated($title, $message2, $order));
        Notification::send($users, new AdminOrderNotification($title, $message2, $order));

        // push notification
        $data = [
            'to' => auth()->user()->fcm_token,
            'priority'=> 'high',
            'notification' => [
                'title' => $title,
                'body' => $message2,
                // 'time' => now(),
                // 'date' => now()->toFormattedDateString(),
            ],
            'data' => $order->load(['rider', 'user']),
        ];

        $res = $this->sendPushNotification($data);

        return $res;
    }
}
