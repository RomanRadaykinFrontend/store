import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import StoreView from '@/views/StoreView.vue'

Vue.use( VueRouter )

const routes: Array<RouteConfig> = [
  {
    path: '/store',
    name: 'Store',
    component: StoreView,
  },
  {
    path: '/',
    redirect: to => '/store',
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

export default router
