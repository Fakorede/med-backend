<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class CheckRole
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle(Request $request, Closure $next, $role)
    {
        if (Auth::user()->role->name == ucfirst($role)) {
            return $next($request);
        }

        // abort(401, message);

        return response()->json([
            'error' => 'You don\'t have the required permission to perform this action'
        ], 401);
    }
}
