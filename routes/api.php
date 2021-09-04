<?php

use App\Http\Controllers\Admin\RiderController;
use App\Http\Controllers\Admin\StatsController;
use App\Http\Controllers\Admin\UserController;
use App\Http\Controllers\Auth\LoginController;
use App\Http\Controllers\Auth\RegisterController;
use App\Http\Controllers\Auth\ResetPasswordController;
use App\Http\Controllers\Auth\VerificationController;
use App\Http\Controllers\Rider\OrderController as RiderOrderController;
use App\Http\Controllers\Shared\NotificationController;
use App\Http\Controllers\Shared\RegisterController as SharedRegisterController;
use App\Http\Controllers\Shared\SettingsController;
use App\Http\Controllers\User\OrderController as UserOrderController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\App;
use Illuminate\Support\Facades\Broadcast;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\URL;

if (App::environment('production')) {
    URL::forceScheme('https');
}

# 1. Guest Routes
Route::group(['middleware' => ['guest:api'], 'namespace' => 'Auth', 'prefix' => 'auth'], function() {
    # AUTH api
    Route::post('/register', [RegisterController::class, 'register']);
    Route::post('/resend/verification', [VerificationController::class, 'resend']);
    Route::post('/verify/{user}', [VerificationController::class, 'verify'])->name('verification.verify');
    Route::post('/password/forgot', [ResetPasswordController::class, 'passwordResetLink']);
    Route::post('/password/reset', [ResetPasswordController::class, 'passwordReset']);
    Route::post('/login', [LoginController::class, 'login']);
});


# 2. Protected Routes
Route::middleware(['auth:api'])->group(function () {
    # ADMIN api // verified
    Route::group(['namespace' => 'Admin', 'prefix' => 'admin', 'middleware' => ['role:admin']], function () {
        Route::get('/admins/{per_page?}', [UserController::class ,'admins'])->name('admins');
        Route::get('/users/{per_page?}', [UserController::class ,'users'])->name('users');
        Route::get('/riders/{per_page?}', [RiderController::class ,'riders'])->name('riders');
    });

    # USERS api // verified
    Route::group(['namespace' => 'User', 'prefix' => 'user', 'middleware' => ['role:user']], function () {
        Route::get('/orders', [UserOrderController::class, 'getUserOrders']);
        Route::get('/order/{id}', [UserOrderController::class, 'getOrderById']);
        Route::post('/place-order', [UserOrderController::class, 'placeOrder']);
        Route::post('/order-rider', [UserOrderController::class, 'updateOrderRider']);
    });

    # RIDERS api // verified
    Route::group(['namespace' => 'Rider', 'prefix' => 'rider', 'middleware' => ['role:rider']], function () {
        Route::get('/orders', [RiderOrderController::class, 'getRiderOrders']);
        Route::get('/order/{id}', [RiderOrderController::class, 'getOrderById']);
        Route::post('/order/{id}/status', [RiderOrderController::class, 'updateOrderStatus']);
        Route::post('/availability', [RiderOrderController::class, 'updateAvailableStatus']);
    });

    # SHARED SETTINGS
    Route::namespace('Shared')->group(function () {
        Route::prefix('settings')->group(function () {
            Route::put('/update-profile', [SettingsController::class, 'updateProfile']);
            Route::put('/update-password', [SettingsController::class, 'updatePassword']);
            // Route::put('/fcm-token', [SettingsController::class, 'updateFCMToken']);
            Route::put('/update-location', [SettingsController::class, 'updateCurrentLocation']);
            Route::post('/invite', [SharedRegisterController::class , 'addUser'])->middleware('role:admin');
        });

        # Notifications
        Route::prefix('notifications')->group(function () {
            Route::get('/{type}', [NotificationController::class, 'getNotifications']);
            Route::put('/{notification_id}', [NotificationController::class, 'markAsRead']);
        });
    });

    

    # authenticated user
    Route::get('/user', function (Request $request) {
        return $request->user();
    });

    # logout
    Route::post('/logout', [LoginController::class, 'logout']);
});

# 3. MISC
Route::get('/admin/stats', StatsController::class)->middleware('role:admin');
Route::get('/charges', [SettingsController::class, 'appCharges']);
Route::get('/transaction/reference', [UserOrderController::class, 'generateTxRef']);
Route::get('/verify_transaction', [UserOrderController::class, 'verifyPayment']);
Route::get('/track/order', [UserOrderController::class, 'trackOrder']);
Route::get('/available/riders', [RiderOrderController::class, 'getAvailableRiders']);
Route::get('/heroku/postgresdb', function() {
    return database_vars();
});
Route::get('/heroku/cleardb', function() {
    return cleardb_vars();
});


# websockets
Broadcast::routes(['middleware' => ['auth:sanctum']]);
