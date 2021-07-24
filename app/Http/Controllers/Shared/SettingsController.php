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
            'location.latitude' => ['required', 'numeric'],
            'location.longitude' => ['required', 'numeric'],
        ]);

        // TODO: refactor location to spatial data type  
        // $location = new Point($request->location['latitude'], $request->location['longitude']);


        $profile = auth()->user()->profile;

        $profile->update([
            // 'location' => $location,
            'location_longitude' => $request->location['longitude'],
            'location_latitude' => $request->location['latitude'],
            'address' => $request->location['address']
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
