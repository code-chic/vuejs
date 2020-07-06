import { RouterMiddlewareConfig } from './router-middleware'
import Config from '@/config'

// 处理验证登录业务逻辑
async function checkLogin(): Promise<boolean> {
  const user = sessionStorage.getItem('user')
  return !!user
}

// 检查是否需要校验用户登录信息，以及身份信息的合法性
export default function verifyLoginAuthenticate(): RouterMiddlewareConfig {
  return {
    loca: 'before',
    middlewareHandle: (to, from, next) => {
      let isAuth: boolean = to.meta.isAuth
      let len = to.matched.length
      // 校验 vue-router 匹配到的路由，并检查匹配路由中是否存在
      // 需要验证身份信息的路由，如果其中存在一项，那么 isAuth 就为 true
      if (!isAuth && Config.isLogin && len) {
        while (len > 0) {
          isAuth = to.matched[len - 1].meta.isAuth
          if (isAuth) break
          len--
        }
      }
      if (isAuth && Config.isLogin && next) {
        checkLogin().then((result: boolean) => {
          next(result ? undefined : { path: '/login' })
        })
      } else if (next) {
        next() // 跳过身份信息验证
      }
    }
  }
}
