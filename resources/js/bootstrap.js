window._ = require('lodash');

window.axios = require('axios');
window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';


/**
 * Next we will register the CSRF Token as a common header with Axios so that
 * all outgoing HTTP requests automatically have it attached. This is just
 * a simple convenience so we don't have to attach every token manually.
 */

let token = document.head.querySelector('meta[name="csrf-token"]');
//var token = $('meta[name="csrf-token"]').attr('content');

if (token) {
  window.axios.defaults.headers.common['X-CSRF-TOKEN'] = token.content;
} else {
  console.error('CSRF token not found: https://laravel.com/docs/csrf#csrf-x-csrf-token');
}

// console.log(token.content)


window.axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('sserpxe_cigam')}`;

/**
 * Echo exposes an expressive API for subscribing to channels and listening
 * for events that are broadcast by Laravel. Echo and event broadcasting
 * allows your team to easily build robust real-time web applications.
 */

import Echo from "laravel-echo";

window.Pusher = require("pusher-js");
 
window.Echo = new Echo({
  broadcaster: "pusher",
  key: process.env.MIX_PUSHER_APP_KEY,
  cluster: process.env.MIX_PUSHER_APP_CLUSTER, // prod
  encrypted: true, // prod
  wsHost: window.location.hostname,
  wsPort: 6001,
  wssPort: 6001, // prod
  disableStats: true,
  forceTLS: true, // prod
  enabledTransports: ['ws', 'wss'], // prod
  authorizer: (channel, options) => {
    return {
      authorize: (socketId, callback) => {
        axios.post('/api/broadcasting/auth', {
          socket_id: socketId,
          channel_name: channel.name
        }, {
          headers: { 'Authorization': `Bearer ${localStorage.getItem('sserpxe_cigam')}` }
        })
        .then(response => {
          callback(false, response.data);
        })
        .catch(error => {
          callback(true, error);
        });
      }
    };
  },
});
