import VueRouter from 'vue-router'
import { RouterMiddlewareConfig } from './router-middleware'
import verifyLoginAuthenticate from './verifyLoginAuthenticate.m'

const middlewares: Set<RouterMiddlewareConfig> = new Set<RouterMiddlewareConfig>()
middlewares.add(verifyLoginAuthenticate()) // 注册登录认证中间件

export default function registerMiddleware(router: VueRouter): void {
  middlewares.forEach((value: RouterMiddlewareConfig) => {
    if (value.loca === 'before') {
      router.beforeEach(value.middlewareHandle)
    }
    if (value.loca === 'after') {
      router.beforeEach(value.middlewareHandle)
    }
  })
}
