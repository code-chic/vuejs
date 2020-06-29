import { RouteConfig } from 'vue-router'
import Layout from '@/pages/Layout.vue'
import Home from '@/pages/home/index.vue'

const routes: RouteConfig[] = [
  {
    path: '',
    component: Layout,
    meta: {
      isAuth: false // 是否开启登录校验
    },
    children: [
      {
        path: '/',
        name: '首页',
        meta: {
          keepAlive: true
        },
        component: Home
      },
      {
        path: '/order/list',
        name: '订单列表',
        meta: {
          keepAlive: false
        },
        component: () => import('@/pages/order/index.vue')
      }
    ]
  },
  {
    path: '/login',
    component: () => import('@/pages/login/index.vue')
  }
]

export default routes
