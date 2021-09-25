<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class AdminInvite extends Mailable implements ShouldQueue
{
    use Queueable, SerializesModels;

    public $userEmail;
    public $userName;
    public $password;
    public $role_id;

    /**
     * Create a new message instance.
     * @param $name
     * @param $email
     * @param $password
     * @return void
     */
    public function __construct($name, $email, $password, $role_id) {
        $this->userName = $name;
        $this->userEmail = $email;
        $this->password = $password;
        $this->role_id = $role_id;
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
        if ($this->role_id == 1) {
            return $this->from('admin@magicexpressdelivery.com', 'Magic Express Delivery')
                ->subject("Admin Dashboard Access")
                ->markdown('mails.admin-invite');
        } else {
            return $this->from('admin@magicexpressdelivery.com', 'Magic Express Delivery')
                ->subject("Rider App Access")
                ->markdown('mails.admin-invite');
        }
    }
}
