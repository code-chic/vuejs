import { RouteConfig } from 'vue-router'
import Layout from '@/pages/Layout.vue'
import Home from '@/pages/home/index.vue'

const routes: RouteConfig[] = [
  {
    path: '/',
    component: Layout,
    meta: {
      isAuth: true // 是否开启登录校验
    },
    children: [
      {
        path: '',
        component: Home
      }
    ]
  },
  {
    path: '/login',
    component: () => import('@/pages/login/index.vue')
  }
]

export default routes
