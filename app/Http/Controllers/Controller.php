<?php

namespace App\Http\Controllers;

use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Routing\Controller as BaseController;
use Illuminate\Support\Facades\Log;

class Controller extends BaseController
{
    use AuthorizesRequests, DispatchesJobs, ValidatesRequests;

    const PERSONNEL_OPTION_1 = 'Sender';
    const PERSONNEL_OPTION_2 = 'Receiver';
    const PERSONNEL_OPTION_3 = 'Third-party';

    const ORDER_TYPE_1 = 'Dispatch';
    const ORDER_TYPE_2 = 'Errand';

    const ORDER_STATUS_1 = 'Created';
    const ORDER_STATUS_2 = 'Processed';
    const ORDER_STATUS_3 = 'Assigned';
    const ORDER_STATUS_4 = 'In-transit';
    const ORDER_STATUS_5 = 'Delivered';
 
    const PAYMENT_METHOD_1 = 'Paystack';
    const PAYMENT_METHOD_2 = 'Pay On Delivery';

    const PAYMENT_STATUS_1 = 'Paid';
    const PAYMENT_STATUS_2 = 'Not Paid';

    const ORDER_STATUSES = ['Created', 'Processed', 'Assigned', 'In-transit', 'Delivered'];

    public function sendPushNotification($body)
    {
        $url = 'https://fcm.googleapis.com/fcm/send';
        $key = config('app.firebase_key');

        $headers = array(
            'Authorization: key=' . $key,
            'Content-Type: application/json'
        );

        // open connection
        $ch = curl_init();

        // set url and method
        curl_setopt($ch, CURLOPT_URL, $url);
        curl_setopt($ch, CURLOPT_POST, true);

        // set headers
        curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);

        // disable ssl verification
        curl_setopt($ch, CURLOPT_SSL_VERIFYHOST, 0);
        curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);

        // add notification body
        curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($body));

        // exec request
        $result = curl_exec($ch);
        if ($result === false) {
            Log::info('curl failed: ' . curl_error($ch));
            die('Curl failed: ' . curl_error($ch));
        }

        // close connection
        curl_close($ch);

        // return result
        return $result;
    }

}
