<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;

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

        $total_riders = User::where('role_id', 2)->count();

        $verified_riders = User::where(function($query) {
            $query->where('role_id', 2)
            ->whereNotNull('email_verified_at');
        })->count();

        $unverified_riders = User::where(function($query) {
            $query->where('role_id', 2)
            ->whereNull('email_verified_at');
        })->count();


        return [
            'total_users' => $total_users,
            'verified_users' => $verified_users,
            'unverified_users' => $unverified_users,
            'total_riders' => $total_riders,
            'verified_riders' => $verified_riders,
            'unverified_riders' => $unverified_riders,
        ];
    }
}
