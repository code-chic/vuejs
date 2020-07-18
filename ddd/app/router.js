import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/home/index'

// install vue-router plugin
Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  routes: [{
    path: '/',
    component: Home
  }, {
    path: '/about',
    component: () => import('@/views/about/index')
  }]
})

export default router
