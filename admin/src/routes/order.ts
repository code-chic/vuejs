import { RouteConfig } from 'vue-router'

export const routes: { items: RouteConfig[] } = {
  items: [
    {
      name: '订单系统',
      path: '/order/list',
      component: () => import('@/pages/order/index.vue'),
      meta: {
        keepAlive: false
      }
    }
  ]
}
