<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Auth\Events\Verified;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\URL;

class VerificationController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('throttle:6,1')->only('verify', 'resend');
    }

    public function verify(Request $request, User $user) 
    {
        // check if signed url
        if(!URL::hasValidSignature($request)) {
            return response()->json(["errors" => [
                "message" => "Invalid verification link"
            ]], 422);
        }

        // check if user is already verified
        if($user->hasVerifiedEmail()) {
            return response()->json(["errors" => [
                "message" => "User has already been verified"
            ]], 422);
        }

        $user->markEmailAsVerified();

        event(new Verified($user));

        return response()->json([
            "message" => "User successfully verified"
        ]);
    }

    public function resend(Request $request) 
    {
        $request->validate([
            "email" => ["email", "required"],
        ]);

        $user = User::where("email", $request->email)->first();
        if(!$user) {
            return response()->json([
                "errors" => [
                    "email" => "User does not exist"
                ]
            ], 422);
        }

        if($user->hasVerifiedEmail()) {
            return response()->json(["errors" => [
                "message" => "User has already been verified"
            ]], 422);
        }

        $user->sendEmailVerificationNotification();

        return response()->json([
            "status" => "Verification link has been re-sent"
        ]);
    }
}
