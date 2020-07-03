import { RouterMiddlewareConfig } from './router-middleware'

// 根据当前匹配到的路由动态修改网站标题
export default function updateWebsiteTitle(): RouterMiddlewareConfig {
  return {
    loca: 'after',
    middlewareHandle: (to, from) => {
      document.title = to.name ? to.name + ' · 小猪部落管理系统平台' : '小猪部落管理系统平台'
    }
  }
}
