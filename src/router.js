import Vue from 'vue'
import Router from 'vue-router'
import myHome from './views/home.vue'

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      redirect: "/home"
    },
    {
      path: '/home',
      name: 'home',
      component: myHome
    },
    // {
    //   path: '/home',
    //   name: 'home',
    //   component: () => import(/* webpackChunkName: "home" */ './views/home.vue')
    // },
  ]
})
