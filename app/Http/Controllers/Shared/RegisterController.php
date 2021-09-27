<?php

namespace App\Http\Controllers\Shared;

use App\Http\Controllers\Controller;
use App\Http\Requests\AddUserRequest;
use App\Mail\AdminInvite;
use App\Models\AdminInvitation;
use App\Models\User;
use App\Traits\ParseResponse;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Mail;

class RegisterController extends Controller
{
    use ParseResponse;

    public function addUser(AddUserRequest $request)
    {
        try {
            DB::beginTransaction();

            $user = new User();

            // TODO: refactor
            $pass = Str::random(8);

            $user->first_name = $request->first_name;
            $user->last_name = $request->last_name;
            $user->phone_number = $request->phone_number;
            $user->email = $request->email;
            $user->role_id = $request->role_id;
            $user->password = Hash::make($pass);
            $user->email_verified_at = now();

            $user->save();

            AdminInvitation::create([
                'user_id' => $user->id,
                'admin_id' => auth()->id(),
                'user_role' => $user->role_id,
            ]);

            DB::commit();

            Mail::to($user->email)
                ->send(new AdminInvite($user->first_name, $user->email, $pass, $user->role_id));

            return $this->success([],"User successfully added. An invite has been sent via mail", 200);


        } catch (\Exception $e) {
            DB::rollBack();
            Log::error($e);
            return $this->error($e->getMessage(), 500);
        }
    }
}
