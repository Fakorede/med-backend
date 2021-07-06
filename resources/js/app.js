require('./bootstrap');
import Raphael from 'raphael/raphael'
global.Raphael = Raphael

import Vue from 'vue'
import VueRouter from 'vue-router'
import axios from 'axios'
import moment from 'moment'
import Toasted from 'vue-toasted'
import router from './router/index'
import store from './store/index'
import App from './App.vue'
import './plugins'
import './directives'
import ValidationErrors from "./components/messages/ValidationErrors.vue"
import Success from "./components/messages/Success.vue"
import Error from "./components/messages/Error.vue"
import logOut from './mixins/logOut'

// axios.create({
//   baseURL: 'domain.nl/path/to/my/api'
// })

// if (process.env.MIX_APP_ENV === 'production') {
//   axios.defaults.baseURL = "https://medng.herokuapp.com";
// } else {
//   axios.defaults.baseURL = "http://localhost:8000";
// }

axios.defaults.baseURL = process.env.MIX_APP_URL


axios.defaults.withCredentials = true

Vue.config.productionTip = false
Vue.use(axios)
Vue.use(VueRouter)
Vue.use(Toasted, {
  iconPack: 'fontawesome',
  position: 'top-right',
  duration: '4000',
  theme: 'toasted-primary',
})

Vue.mixin(logOut)

Vue.filter("dateFilter", value => moment(value).format('LLLL'));

Vue.component('pagination', require('laravel-vue-pagination'))

Vue.component("v-error", Error);
Vue.component("v-success", Success);
Vue.component("v-errors", ValidationErrors);

const app = new Vue({
  router,
  store,
  beforeCreate() {
    this.$store.dispatch('auth/retreiveUser')
  },
  render: h => h(App),
}).$mount('#app');
