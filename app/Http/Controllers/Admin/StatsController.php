<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Order;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class StatsController extends Controller
{
    /**
     * Handle the incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function __invoke(Request $request)
    {
        $total_users = User::where('role_id', 3)->count();

        $verified_users = User::where(function($query) {
            $query->where('role_id', 3)
            ->whereNotNull('email_verified_at');
        })->count();

        $unverified_users = User::where(function($query) {
            $query->where('role_id', 3)
            ->whereNull('email_verified_at');
        })->count();

        $active_users = User::where('role_id', 3)->has('orders')->count();
        $inactive_users = User::where('role_id', 3)->whereDoesntHave('orders')->count();

        $total_riders = User::where('role_id', 2)->count();

        $pending_orders = Order::where('order_status', Controller::ORDER_STATUS_1)->count();
        $completed_orders = Order::where('order_status', Controller::ORDER_STATUS_5)->count();

        // $order_stats = Order::query()
        //     ->join('order_items', 'orders.id', '=', 'order_items.order_id')
        //     ->selectRaw("DATE_FORMAT(orders.created_at, '%Y-%m-%d') as date, sum(order_items.quantity * order_items.price) as sum")
        //     ->groupBy('date')
        //     ->get();

        $order_status_stats = Order::selectRaw("DATE_FORMAT(orders.created_at, '%Y-%m-%d') as date, order_status, count(*) as total")
            // ->where('order_status', $status)
            ->groupBy('date', 'order_status')
            ->get();

        // foreach(Controller::ORDER_STATUSES as $k=>$status) {

        //     // \Log::info($k . ' => ' . $v);

        //     $order_status_stats = Order::select('order_status', DB::raw('count(*) as total'))
        //         ->where('order_status', $status)
        //         ->groupBy('order_status')
        //         ->get()->toArray();

        // }

        // return;
        //return $order_status_stats;

        return [
            'users' => [
                'total_users' => $total_users,
                'verified_users' => $verified_users,
                'unverified_users' => $unverified_users,
                'active_users' => $active_users,
                'inactive_users' => $inactive_users,
                'total_riders' => $total_riders,
            ],
            'orders' => [
                'pending_orders' => $pending_orders,
                'completed_orders' => $completed_orders,
            ],
            'order_status_stats' => $order_status_stats
        ];
    }
}
