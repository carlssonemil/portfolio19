import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '*',
      name: 'notfound',
      component: () => import(/* webpackChunkName: "notfound" */ './views/404.vue')
    },
    {
      path: '/',
      name: 'home',
      component: Home
    }
  ]
})
