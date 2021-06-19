<?php

namespace App\Notifications;

use Carbon\Carbon;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Auth\Notifications\VerifyEmail as Notification;
use Illuminate\Support\Facades\Config;
use Illuminate\Support\Facades\URL;

class VerifyEmail extends Notification
{
    use Queueable;

    /**
     * Get the verification URL for the given notifiable.
     *
     * @param  mixed  $notifiable
     * @return string
     */
    protected function verificationUrl($notifiable)
    {
        $appUrl = config('app.url');
        $signedUrl = URL::temporarySignedRoute(
            'verification.verify', 
            Carbon::now()->addMinutes(Config::get('auth.verification.expire', 60)),
            ['user' => $notifiable->id]
        );

        return str_replace(url('/api'), $appUrl, $signedUrl);
    }
}
