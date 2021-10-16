<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\AppCharges;
use Illuminate\Http\Request;

class AppChargesController extends Controller
{
    public function getAppCharges()
    {
        $charges = AppCharges::first();
        return $this->_success($charges);
    }

    public function updateAppCharges(Request $request)
    {
        $this->authorize('update-charges');

        $validated = $request->validate([
            'dispatch_base_price' => 'required',
            'dispatch_price_per_km' => 'required',
            'errand_base_price' => 'required',
            'errand_price_per_km' => 'required',
        ]);

        $charges = AppCharges::first();
        $charges->update([
            'dispatch_base_price' => $validated['dispatch_base_price'],
            'dispatch_price_per_km' => $validated['dispatch_price_per_km'],
            'errand_base_price' => $validated['errand_base_price'],
            'errand_price_per_km' => $validated['errand_price_per_km'],
        ]);

        return $this->_success($charges);
    }

    private function _success($charges) {
        return response()->json([
            'dispatch_base_price' => (float) $charges->dispatch_base_price,
            'dispatch_price_per_km' => (float) $charges->dispatch_price_per_km,
            'errand_base_price' => (float) $charges->errand_base_price,
            'errand_price_per_km' => (float) $charges->errand_price_per_km,
        ]);
    }
}
