import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from '@/router/routes'
import useMiddleware from '@/router/middleware'

// install vue-router plugin.
Vue.use(VueRouter)

const router = new VueRouter({
  base: process.env.BASE_URL,
  mode: 'history',
  routes
})

// register router middleware
useMiddleware(router)

export default router
