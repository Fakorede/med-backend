<?php

namespace App\Http\Controllers\Auth;

use App\Events\RealTimeEvent;
use App\Http\Controllers\Controller;
use App\Http\Requests\LoginRequest;
use App\Http\Services\AuthService;
use App\Models\User;
use App\Notifications\RealTimeNotification;
use App\Traits\ParseResponse;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Notification;

class LoginController extends Controller
{
    use ParseResponse;

    private $auth;

    /**
     * @param AuthService $authService
    */
    public function __construct(AuthService $authService) {
        $this->auth = $authService;
    }

    /**
     * Get a Token via given credentials.
     *
     * @param Request $request
     * @return mixed
     */
    public function login(LoginRequest $request) {
        $userToken = $this->auth->getUserToken($request->only(['email', 'password']));

        if (is_null($userToken)) {
            return $this->error('Email or password is incorrect', Response::HTTP_BAD_REQUEST);
        }

        // $cookie = cookie('access_token', $userToken['access_token'], $userToken['expires_in']);

        return $this->success($userToken);
    }

    /**
     * Logs the user out (Invalidate the token).
    */
    public function logout() {
        return $this->auth->logout();
    }
}
