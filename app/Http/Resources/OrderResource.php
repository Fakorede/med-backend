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
            'user' => new UserResource($this->user),
            'rider' => new UserResource($this->rider),
            'order_items' => OrderItemResource::collection($this->order_items),
            'total_price' => $this->total_price,
            'pickup_address' => $this->pickup_address,
            'dropoff_address' => $this->dropoff_address,
            'sender_name' => $this->sender_name,
            'sender_mobile' => $this->sender_mobile,
            'receiver_name' => $this->receiver_name,
            'receiver_mobile' => $this->receiver_mobile,
            'delivery_note' => $this->delivery_note,
            'tracking_number' => $this->tracking_number,
            'order_status' => $this->order_status,
            'order_type' => $this->order_type,
            'payment_method' => $this->payment_method,
            'personnel_option' => $this->personnel_option,
            'payment_status' => $this->payment_status,
            'payment_verified' => $this->payment_verified ? True : False,
            // 'transaction_ref' => $this->transaction_ref,            
            'paid_at' => $this->paid_at ? Carbon::parse($this->paid_at)->format('d/m/Y H:i:s') : null,
            'delivered_at' => $this->delivered_at ? Carbon::parse($this->delivered_at)->format('d/m/Y H:i:s') : null,
            'created_at' => Carbon::parse($this->created_at)->format('d/m/Y H:i:s'),
            'updated_at' => Carbon::parse($this->updated_at)->format('d/m/Y H:i:s'),
        ];
    }
}
