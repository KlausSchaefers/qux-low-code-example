import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import(/* webpackChunkName: "about" */ '../views/Home.vue')
  },
  {
    path: '/example1/',
    name: 'example1',
    component: () => import(/* webpackChunkName: "about" */ '../views/Example1.vue')
  },
  {
    path: '/example1/:screenName.html',
    name: 'example1path',
    component: () => import(/* webpackChunkName: "about" */ '../views/Example1.vue')
  },
  {
    path: '/example2/',
    name: 'example2',
    component: () => import(/* webpackChunkName: "about" */ '../views/Example2.vue')
  },
  {
    path: '/example2/:screenName.html',
    name: 'example2path',
    component: () => import(/* webpackChunkName: "about" */ '../views/Example2.vue')
  },
]

const router = new VueRouter({
  routes
})

export default router
