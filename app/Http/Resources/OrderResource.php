<?php

namespace App\Http\Resources;

use Carbon\Carbon;
use Illuminate\Http\Resources\Json\JsonResource;

class OrderResource extends JsonResource
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
            'item' => $this->item,
            'quantity' => $this->quantity,
            'price' => $this->price,
            'description' => $this->description,
            'order_type' => $this->order_type,
            'order_status' => $this->order_status,
            'payment_method' => $this->payment_method,
            'tracking_number' => $this->tracking_number,
            'pickup_location' => $this->pickup_location,
            'dropoff_location' => $this->dropoff_location,
            'receiver_name' => $this->receiver_name,
            'receiver_mobile' => $this->receiver_mobile,
            'payment_status' => $this->payment_status,
            'payment_verified' => $this->payment_verified ? True : False,
            'transaction_ref' => $this->transaction_ref,
            'user' => new UserResource($this->user),
            'rider' => new UserResource($this->rider),
            'paid_at' => $this->paid_at ? Carbon::parse($this->paid_at)->format('d/m/Y H:i:s') : null,
            'delivered_at' => $this->delivered_at ? Carbon::parse($this->delivered_at)->format('d/m/Y H:i:s') : null,
            'created_at' => Carbon::parse($this->created_at)->format('d/m/Y H:i:s'),
            'updated_at' => Carbon::parse($this->updated_at)->format('d/m/Y H:i:s'),
        ];
    }
}
