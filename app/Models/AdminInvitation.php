<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasOne;

class AdminInvitation extends Model
{
    use HasFactory;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'user_id', 'admin_id', 'user_role', 'is_accepted',
    ];

    /**
     * Get the user associated with the invitation.
     */
    public function user(): HasOne
    {
        return $this->hasOne(User::class)
            ->where('role_id', 3);
    }

    /**
     * Get the admin associated with the invitation.
     */
    public function admin(): HasOne
    {
        return $this->hasOne(User::class)
            ->where('role_id', 1);
    }
}
