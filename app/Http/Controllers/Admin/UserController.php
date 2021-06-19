<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

class UserController extends Controller
{
    public function users($per_page=10)
    {
        $users = User::where('role_id', 3)->paginate($per_page);
        return response()->json($users, Response::HTTP_OK);
    }
}
