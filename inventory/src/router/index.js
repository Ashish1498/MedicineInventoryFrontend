import Vue from 'vue'
import VueRouter from 'vue-router'
import homePage from '@/pages/homePage.vue'
import login from '@/pages/login.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/homePage',
    name: 'homePage',
    component: homePage
  },
  {
    path: '/login',
    mane: '/login',
    component: login
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
