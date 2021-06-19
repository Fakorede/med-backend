<?php

use App\Http\Controllers\Admin\RiderController;
use App\Http\Controllers\Admin\StatsController;
use App\Http\Controllers\Admin\UserController;
use App\Http\Controllers\Auth\LoginController;
use App\Http\Controllers\Auth\RegisterController;
use App\Http\Controllers\Auth\ResetPasswordController;
use App\Http\Controllers\Auth\VerificationController;
use App\Http\Controllers\Shared\RegisterController as SharedRegisterController;
use App\Http\Controllers\Shared\SettingsController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;


# 1. Guest Routes
Route::group(['middleware' => ['guest:api'], 'namespace' => 'Auth', 'prefix' => 'auth'], function() {
    # AUTH api
    Route::post('register', [RegisterController::class, 'register']);
    Route::post('resend/verification', [VerificationController::class, 'resend']);
    Route::post('verify/{user}', [VerificationController::class, 'verify'])->name('verification.verify');
    Route::post('password/forgot', [ResetPasswordController::class, 'passwordResetLink']);
    Route::post('password/reset', [ResetPasswordController::class, 'passwordReset']);
    Route::post('login', [LoginController::class, 'login']);
});


# 2. Protected Routes
Route::middleware(['auth:api'])->group(function () {
    # ADMIN api
    Route::group(['namespace' => 'Admin', 'prefix' => 'admin', 'middleware' => ['verified', 'admin']], function () {

        Route::get('/users/{per_page?}', [UserController::class ,'users'])->name('users');
        Route::get('/riders/{per_page?}', [RiderController::class ,'riders'])->name('riders');

        // Route::get('/dashboard/users', ['App\Http\Controllers\DashboardController','getAllUsers'])->name('dashboard.users');
    });

    # USERS api
    Route::group(['namespace' => 'User', 'prefix' => 'user', 'middleware' => ['user', 'verified']], function () {

    });

    # RIDERS api
    Route::group(['namespace' => 'Rider', 'prefix' => 'rider', 'middleware' => ['rider', 'verified']], function () {

    });

    # SHARED SETTINGS
    Route::group(['namespace' => 'Shared', 'prefix' => 'settings'], function () {
        Route::get('/profile', [SettingsController::class, 'userProfile']);
        Route::put('/profile/update', [SettingsController::class, 'updateProfile']);
        Route::put('/password/update', [SettingsController::class, 'updatePassword']);
        Route::post('/add/user', [SharedRegisterController::class , 'addUser'])->middleware('admin');
    });

    # authenticated user
    Route::get('/user', function (Request $request) {
        return $request->user();
    });

    # logout
    Route::post('/logout', [LoginController::class, 'logout']);

});

# 3. MISC
Route::get('/admin/stats', StatsController::class);
