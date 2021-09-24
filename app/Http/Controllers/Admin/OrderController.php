<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Resources\OrderResource;
use App\Models\Order;
use App\Traits\ParseResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;

class OrderController extends Controller
{
    use ParseResponse;

    // get all orders
    // filter by date, payment status
    public function getAllOrders($per_page=50)
    {
        return Order::select(
            'id', 'pickup_address', 'dropoff_address', 'total_price', 'tracking_number', 'order_type', 'order_status', 'created_at',
        )
        ->latest()
        ->paginate($per_page);
    }

    // GET - get all transactions from paystack
    public function getAllTransactions($per_page=50, $page=1)
    {
        // call paystack verify endpoint and return response
        // filter parameters - status('failed', 'success', 'abandoned'), from, to, amount
        $response = Http::withHeaders([
            'Authorization' => 'Bearer ' . config('paystack.secretKey'),
            'Content-Type'  => 'application/json',
            'Accept'        => 'application/json'
        ])->get(config('paystack.paymentUrl') . "?perPage={$per_page}&page={$page}");

        if ($response['message'] === 'Transactions retreived') {
            return $this->success($response['data']);
        }

        return $this->error();
    }

    // GET - get single transaction
    public function getSingleTransaction() {
        // TODO
    }
}
