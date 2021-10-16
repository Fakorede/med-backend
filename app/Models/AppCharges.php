<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class AppCharges extends Model
{
    use HasFactory;

    protected $table = 'app_charges';

    protected $fillable = [
        'dispatch_base_price', 'dispatch_price_per_km', 'errand_base_price', 'errand_price_per_km',
    ];
}
