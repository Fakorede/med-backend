<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreRiderRequest;
use App\Mail\AdminInvite;
use App\Models\AdminInvitation;
use App\Models\User;
use App\Traits\ParseResponse;
use Exception;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Mail;

class RiderController extends Controller
{
    use ParseResponse;

    public function riders($per_page=10)
    {
        $users = User::where('role_id', 2)->paginate($per_page);
        return response()->json($users, Response::HTTP_OK);
    }

    
}
