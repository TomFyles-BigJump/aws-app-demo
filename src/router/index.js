import Vue from 'vue'
import VueRouter from 'vue-router'
import authState from '../store/auth/state';

import routes from './routes'

Vue.use(VueRouter)

const Router = new VueRouter({
  /*
   * NOTE! Change Vue Router mode from quasar.conf.js -> build -> vueRouterMode
   *
   * When going with "history" mode, please also make sure "build.publicPath"
   * is set to something other than an empty string.
   * Example: '/' instead of ''
   */

  // Leave as is and change from quasar.conf.js instead!
  mode: process.env.VUE_ROUTER_MODE,
  base: process.env.VUE_ROUTER_BASE,
  scrollBehavior: () => ({ y: 0 }),
  routes
})

Router.beforeEach((to, from, next) =>{
  if(!authState.tokens && !to.path.startsWith("/auth")){
    var tokens = window.localStorage.getItem("tokens");
    if(tokens == null){
      next('/auth/login');
      return;
    }
    next();
    return;
  }
  next();
})

export default Router
