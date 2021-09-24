<?php

namespace App\Http\Resources;

use Carbon\Carbon;
use Illuminate\Http\Resources\Json\JsonResource;

class SummarizedOrderResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'order_status' => $this->order_status,
            'total_amount' => $this->total_price,
            'transaction_reference' => auth()->user()->role_id === 3 ? $this->transaction_ref : '',
            'pickup_address' => $this->pickup_address,
            'dropoff_address' => $this->dropoff_address,
            // 'created_at' => Carbon::parse($this->created_at)->toDateTimeString(),
        ];
    }
}
