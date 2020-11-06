import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },

  {
    path: '/server',
    name: 'server',
    component: () => import('../views/server.vue')
  },
  {
    path: '/count',
    name: 'count',
    component: () => import('../views/count.vue')
  },
  {
    path: '/download',
    name: 'download',
    component: () => import('../views/download.vue')
  },
  {
    path: '/zhihu',
    name: 'zhihu',
    component: () => import('../views/zhihu.vue')
  },
  {
    path: '/waterline',
    name: 'waterline',
    component: () => import('../views/waterline.vue')
  },

]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
