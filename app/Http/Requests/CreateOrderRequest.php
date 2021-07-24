<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class CreateOrderRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'orderItems.*.item' => ['required'],
            'orderItems.*.quantity' => ['required'],
            'orderItems.*.description' => ['required'],
            'orderItems.*.price' => ['required'],
            'pickup_location.latitude' => ['required'],
            'pickup_location.longitude' => ['required'],
            'pickup_location.address' => ['required'],
            'dropoff_location.latitude' => ['required'],
            'dropoff_location.longitude' => ['required'],
            'dropoff_location.address' => ['required'],
            // 'sender_name' => ['required'],
            // 'sender_mobile' => ['required'],
            // 'receiver_name' => ['required'],
            // 'receiver_mobile' => ['required'],
            'order_type' => ['required'],
            'payment_method' => ['required'],
            'personnel_option' => ['required'],
        ];
    }
}
