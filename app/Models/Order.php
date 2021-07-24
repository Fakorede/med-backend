<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;
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
        'user_id', 'rider_id', 'pickup_location', 'dropoff_location', 'pickup_address', 'dropoff_address', 'sender_name', 'sender_mobile', 'receiver_name', 'receiver_mobile', 'delivery_note', 'tracking_number', 'order_status', 'order_type', 'payment_method', 'personnel_option', 'payment_status', 'payment_verified', 'transaction_ref', 'paid_at', 'delivered_at',
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
     * The accessors to append to the model's array form.
     *
     * @var array
     */
    protected $appends = ['total_price'];

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

    public function order_items(): HasMany
    {
        return $this->hasMany(OrderItem::class);
    }

    // accessor
    public function getTotalPriceAttribute()
    {
        return $this->getTotalPrice();
    }

    // methods
    public function getTotalPrice()
    {
        $total = $this->order_items->sum(function (OrderItem $item) {
            return $item->price;
        });

        return round($total, 2);
    }

    public function updateOrderRider($rider_id)
    {
        $this['rider_id'] = $rider_id;
        $this->save();
    }

    public function updatePaidOrder($paid_at)
    {
        $this['payment_status'] = 'Paid';
        $this['payment_verified'] = 1;
        $this['paid_at'] = $paid_at;
        $this->save();
    }
}
