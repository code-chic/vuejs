import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import registerMiddleware from '@/router-middlewares'
import Config from '@/config'
import Layout from '@/pages/Layout.vue'
import { routes as home } from './routes/home'
import { routes as order } from './routes/order'

// Install vue-router plugin.
Vue.use(VueRouter)

const routes: RouteConfig[] = [
  {
    path: '/',
    component: Layout,
    children: [],
    meta: {
      isAuth: Config.isLogin // 是否需要登录
    }
  },
  {
    name: '登录',
    path: '/login',
    component: () => import('@/pages/login/index.vue')
  },
  {
    name: '页面未找到',
    path: '*',
    component: () => import('@/pages/404/index.vue')
  }
]

// ===> 添加首页路由
home.items.forEach((r: RouteConfig) => (routes[0] as any).children.push(r))

// ===> 添加订单路由
order.items.forEach((r: RouteConfig) => (routes[0] as any).children.push(r))

const router: VueRouter = new VueRouter({
  base: process.env.BASE_URL,
  mode: 'history',
  routes: routes
})

// ===> 注册中间件
registerMiddleware(router)

export default router
