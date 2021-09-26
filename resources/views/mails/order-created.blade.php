@component('mail::message')
## Hello there,

{{ $msgData }}. Please find the order summary below:<br>

@component('mail::table')
|        |          |
| ------------- |:-------------:|
| Order Id      | {{ $order['id'] }}      |
| Total Amount      | {{ $order['total_price'] }} |
| Pickup Address      | {{ $order['pickup_address'] }} |
| Dropoff Address      | {{ $order['dropoff_address'] }} |
@endcomponent

@if (!empty($order['delivery_note']))
  **Additional Note:** {{ $order['delivery_note'] }}
@endif

Thanks,<br>
{{ config('app.name') }}
@endcomponent
