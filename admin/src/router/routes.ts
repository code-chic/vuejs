import { RouteConfig } from 'vue-router'
import Config from '@/config'
import Layout from '@/pages/Layout.vue'
import Home from '@/pages/home/index.vue'

const routes: RouteConfig[] = [
  {
    path: '',
    meta: { isAuth: Config.isLoign },
    component: Layout,
    children: [
      {
        path: '',
        meta: {
          keepAlive: true
        },
        component: Home
      },
      {
        path: 'order/list',
        component: () => import('@/pages/order/index.vue')
      }
    ]
  },
  {
    path: '/login',
    name: 'Login.vue',
    component: () => import('@/pages/login/index.vue')
  }
]

export default routes
