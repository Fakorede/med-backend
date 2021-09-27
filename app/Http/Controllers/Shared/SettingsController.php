<?php

namespace App\Http\Controllers\Shared;

use App\Http\Controllers\Controller;
use App\Http\Requests\UpdateLocationRequest;
use App\Http\Requests\UpdatePasswordRequest;
use App\Http\Requests\UpdateProfileRequest;
use App\Models\Settings;
use App\Models\User;
use App\Traits\ParseResponse;
use Exception;
use Grimzy\LaravelMysqlSpatial\Types\Point;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Log;

class SettingsController extends Controller
{
    use ParseResponse;

    public function updateProfile(UpdateProfileRequest $request)
    {

    }

    public function updateFCMToken(Request $request)
    {
        try {
            $request->user()->update([
                'fcm_token' => $request->token
            ]);
    
            return response()->json(['fcm_token' => $request->token]);
        } catch (Exception $e) {
            Log::error($e->getMessage());
            return $this->error('FCM Token update failed', Response::HTTP_INTERNAL_SERVER_ERROR);
        }
    }

    public function updatePassword(UpdatePasswordRequest $request)
    {
        if(!Hash::check($request->old_password, $request->user()->password)) {
            return $this->error('Old Password is incorrect', Response::HTTP_BAD_REQUEST);
        }

        try {

            $user = User::find(auth()->user()->id)->first();

            $user->password = Hash::make($request->password);
            $user->save();

            return $this->success([],'Password updated successfully', Response::HTTP_OK);

        } catch(Exception $e) {
            Log::error($e->getMessage());
            return $this->error('Password update failed', Response::HTTP_INTERNAL_SERVER_ERROR);
        }
    }

    public function updateCurrentLocation(UpdateLocationRequest $request)
    {
        // TODO: refactor location to spatial data type  
        // $location = new Point($request->location['latitude'], $request->location['longitude']);

        try {
            auth()->user()->update([
                // 'location' => $location,
                'location_longitude' => $request->location['longitude'],
                'location_latitude' => $request->location['latitude'],
                'address' => $request->location['address']
            ]);

            return $this->success();
        } catch (Exception $e) {
            Log::error($e->getMessage());
            return $this->error('Location update failed', Response::HTTP_INTERNAL_SERVER_ERROR,);
        }
    }

    public function getAppCharges()
    {
        $settings = Settings::whereId(1)->first();
        return $this->_success($settings);
    }

    public function updateAppCharges(Request $request)
    {
        $this->authorize('update-pricing');

        $validated = $request->validate([
            'base_price' => 'required',
            'price_per_km' => 'required',
        ]);

        $settings = Settings::whereId(1)->first();
        $settings->update([
            'base_price' => $validated['base_price'],
            'price_per_km' => $validated['price_per_km']
        ]);

        return $this->_success($settings);
    }

    private function _success($settings) {
        return response()->json([
            'base_price' => (float) $settings->base_price,
            'price_per_km' => (float) $settings->price_per_km,
        ]);
    }
}
