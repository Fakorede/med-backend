<?php

namespace App\Http\Controllers\Shared;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class NotificationController extends Controller
{
    public function getNotifications($type=null)
    {
        $user = auth()->user();
        $notifications = null;

        switch ($type) {
            case 'read':
                $notifications = $user->readNotifications;
                break;
            case 'unread':
                $notifications = $user->unreadNotifications;
                break;
            default:
                $notifications = $user->notifications;
        }

        return response()->json($notifications);
    }

    public function markAsRead($notification_id)
    {
        auth()->user()->notifications->where('id', $notification_id)->markAsRead();

        return response()->json([
            'message' => 'Notification has been marked as read'
        ]);
    }

    public function delete($notification_id)
    {
        auth()->user()->notifications->where('id', $notification_id)->delete();

        return response()->json([
            'message' => 'Notification has been deleted'
        ]);
    }
}
