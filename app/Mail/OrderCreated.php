<?php

namespace App\Mail;

use App\Models\Order;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class OrderCreated extends Mailable implements ShouldQueue
{
    use Queueable, SerializesModels;

    public $subject;
    public $message;
    public $order;

    /**
     * Create a new message instance.
     *
     * @return void
     */
    public function __construct(string $subject, string $message, Order $order)
    {
        $this->subject = $subject;
        $this->message = $message;
        $this->order = $order;
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
        return $this->subject("$this->subject on Magic Express Delivery")
            ->markdown('mails.order-created', [
                'msgData' => $this->message,
                'order' => $this->order,
            ]);
    }
}
