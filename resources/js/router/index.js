import VueRouter from 'vue-router';
import store from '../store';
import routes from './routes';

const router = new VueRouter({
  mode: 'history',
  routes
})

router.beforeEach((to, from, next) => {
  if(to.matched.some(record => record.meta.requiresAuth)) {
    if(!store.getters['auth/authenticated']) {
      next({name: 'auth.login'})
    } else {
      next()
    }
  } else {
    next()
  }
})

export default router;
