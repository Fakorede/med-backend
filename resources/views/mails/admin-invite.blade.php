@component('mail::message')
# Hello {{ $userName }},

@if ($role_id == 1) 
  You have been granted access to the Magic Express Delivery Admin Dashboard. 
  <br>
  Your login details are as follows:
@else
  You have been granted access to the Magic Express Delivery Rider App. Kindly download the app to access the Rider dashboard.
  <br>
  Your login details are as follows:
@endif


**Email:** {{ $userEmail }}
<br>
**Password:** {{ $password }}

Thanks,<br>
{{ config('app.name') }}
@endcomponent