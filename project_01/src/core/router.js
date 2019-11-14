import Vue from 'vue'
import VueRouter from 'vue-router'

// install `vue-router` plugin!
Vue.use(VueRouter)

const router = new VueRouter({
  baseURI: '/',
  mode: 'history',
  routes: []
})

export default router
