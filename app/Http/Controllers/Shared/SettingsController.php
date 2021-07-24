<?php

namespace App\Http\Controllers\Shared;

use App\Http\Controllers\Controller;
use App\Http\Requests\UpdatePasswordRequest;
use App\Http\Requests\UpdateProfileRequest;
use App\Traits\ParseResponse;
use Grimzy\LaravelMysqlSpatial\Types\Point;
use Illuminate\Http\Request;

class SettingsController extends Controller
{
    use ParseResponse;

    public function updateProfile(UpdateProfileRequest $request)
    {

    }

    public function updatePassword(UpdatePasswordRequest $request)
    {

    }

    public function updateCurrentLocation(Request $request)
    {
        $data = $request->validate([
            'point.latitude' => ['required', 'numeric'],
            'point.longitude' => ['required', 'numeric'],
        ]);

        $lat = null;
        $lng = null;

        $point = new Point($lat, $lng);

        $user = auth()->user()->profile;

        $user->update([
            'point' => $point,
        ]);

        return $this->success();
    }

    public function appCharges()
    {
        return response()->json([
            'base_price' => (float) config('settings.base_price'),
            'price_per_km' => (float) config('settings.price_per_km'),
        ]);
    }
}
