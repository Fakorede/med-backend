<?php

namespace App\Http\Services;

class AuthService {
  /**
   * authenticate user
   * @param $request
   * @return array|null
  */
  public function getUserToken($request) {
    if (!auth()->attempt($request)) {
      return null;
    }

    return $this->respondWithToken();
  }

  /**
   * logout user
   */
  public function logout() {
    auth()->user()->tokens()->delete();
    $cookie = cookie()->forget('access_token');
    return response(['message' => 'User logged out successfully!'])->withCookie($cookie);
  }

  /**
   * Get the token array
   *
   * @return array
   */
  protected function respondWithToken() {
    $user = request()->user();
    return [
      'access_token' => $this->parseToken(auth()->user()->createToken('Auth Token')->plainTextToken),
      'user' => [
        'first_name' => $user->first_name,
        'last_name' => $user->last_name,
        'phone_number' => $user->phone_number,
        'email' => $user->email,
        'role' => $user->role->name,
      ],
      'token_type' => 'bearer',
      'expires_in' => config('sanctum.expiration')
    ];
  }

  protected function parseToken($token) {
    return explode('|',$token)[1];
  }
}
