<?php

namespace App\Http\Controllers\Auth;

use App\Models\User;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Requests\RegisterRequest;
use Illuminate\Auth\Events\Registered;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Log;

class RegisterController extends Controller
{
    /**
     * User registration.
     *
     * @param Request $request
     * @return mixed
    */
    public function register(RegisterRequest $request) 
    {
        try {
            DB::beginTransaction();
            
            $user = new User();

            $user->first_name = $request->first_name;
            $user->last_name = $request->last_name;
            $user->phone_number = $request->phone_number;
            $user->email = $request->email;
            $user->role_id = 3;
            $user->password = Hash::make($request->password);
            $user->email_verified_at = now();
            
            $user->save();

            $user->profile()->create();

            DB::commit();

            event(new Registered($user));

            return response()->json([
                'message' => 'Registration Successful! Kindly check your email for a verification link.'
            ], 200);

        }  catch (\Exception $e) {
            DB::rollBack();
            Log::debug($e);
            return $this->error($e->getMessage(), 500);
        }
    }

}
