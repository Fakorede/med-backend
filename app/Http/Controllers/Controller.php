<?php

namespace App\Http\Controllers;

use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Routing\Controller as BaseController;

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

}
