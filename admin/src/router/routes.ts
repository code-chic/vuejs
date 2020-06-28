import { RouteConfig } from 'vue-router'
import Layout from '@/pages/Layout.vue'
import Home from '@/pages/home/index.vue'

const routes: RouteConfig[] = [
  {
    path: '/',
    component: Layout,
    meta: {
      isAuth: false // 是否开启登录校验
    },
    children: [
      {
        path: '/',
        meta: {
          keepAlive: true // 组件是否需要缓存
        },
        component: Home
      },
      {
        path: '/order/list',
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
