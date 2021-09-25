<?php

namespace App\Notifications;

use App\Models\Order;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Broadcasting\ShouldBroadcast;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Notifications\Messages\MailMessage;
use Illuminate\Notifications\Notification;

class OrderNotification extends Notification implements ShouldQueue, ShouldBroadcast
{
    use Queueable;

    public $subject;
    public $message;
    public $order;

    /**
     * Create a new notification instance.
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
     * Get the notification's delivery channels.
     *
     * @param  mixed  $notifiable
     * @return array
     */
    public function via($notifiable): array
    {
        return ['database', 'broadcast'];
    }

    /**
     * Determine which queues should be used for each notification channel.
     *
     * @return array
     */
    // public function viaQueues()
    // {
    //     return [
    //         'mail' => 'mail-queue',
    //         'database' => 'database-queue',
    //         'broadcast' => 'broadcast-queue',
    //     ];
    // }

    /**
     * Get the array representation of the notification.
     *
     * @param  mixed  $notifiable
     * @return array
     */
    public function toArray($notifiable)
    {
        return [
            'message' => "$this->message"
        ];
    }
}
