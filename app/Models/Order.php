<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\SoftDeletes;

class Order extends Model
{
    use HasFactory, SoftDeletes;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'user_id', 'rider_id', 'item', 'quantity', 'price', 'description', 'order_type', 'pickup_location', 'dropoff_location', 'payment_method', 'transaction_ref', 'tracking_number', 'order_type', 'order_status',
    ];

    /**
     * The attributes that should be cast to native types.
     *
     * @var array
     */
    protected $casts = [
        'paid_at' => 'datetime',
        'delivered_at' => 'datetime',
    ];

    /**
     * Get the user that owns the order.
     */
    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class, 'user_id');
    }

    /**
     * Get the rider that owns the order.
     */
    public function rider(): BelongsTo
    {
        return $this->belongsTo(User::class, 'rider_id');
    }


    // methods
    public function updateOrderReceiver($data)
    {
        $this['receiver_name'] = $data['receiver_name'];
        $this['receiver_mobile'] = $data['receiver_mobile'];
        $this->save();
    }

    public function updateOrderRider($rider_id)
    {
        $this['rider_id'] = $rider_id;
        $this->save();
    }

    public function updatePaidOrder($paid_at)
    {
        $this['payment_verified'] = 1;
        $this['payment_status'] = 'Paid';
        $this['paid_at'] = $paid_at;
        $this->save();
    }
}
