<?php

namespace App\Providers;

use App\Models\Order;
use App\Models\User;
use Illuminate\Foundation\Support\Providers\AuthServiceProvider as ServiceProvider;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Gate;

class AuthServiceProvider extends ServiceProvider
{
    /**
     * The policy mappings for the application.
     *
     * @var array
     */
    protected $policies = [
        // 'App\Models\Model' => 'App\Policies\ModelPolicy',
    ];

    /**
     * Register any authentication / authorization services.
     *
     * @return void
     */
    public function boot()
    {
        $this->registerPolicies();

        Gate::define('view-order', function (User $user, Order $order) {
            return ($user->id === $order->user_id) || ($user->id === $order->rider_id) || ($user->role_id === 1);
        });

        Gate::define('create-order', function (User $user) {
            return $user->role_id === 3;
        });

        Gate::define('update-charges', function (User $user) {
            return $user->role_id === 1;
        });

        Gate::define('viewWebSocketsDashboard', function ($user = null) {
            return in_array($user->email, [
                'abiolafakorede@gmail.com',
                'admin@magicexpressdelivery.com',
            ]);
        });
    }
}
