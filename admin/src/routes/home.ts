import { RouteConfig } from 'vue-router'
import Home from '@/pages/home/index.vue'

export const routes: { items: RouteConfig[] } = {
  items: [
    {
      name: '首页',
      path: '',
      component: Home,
      meta: {
        keepAlive: true
      }
    }
  ]
}
