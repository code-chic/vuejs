import { Route, NavigationGuardNext } from 'vue-router'

function isLogin (): boolean {
  return false
}

// 校验用户是否登录
export default function verifyLoginAuthenticate (to: Route, from: Route, next: NavigationGuardNext) {
  const { isAuth } = to.matched[0].meta
  console.log('isAuth: ', isAuth)
  if (!isAuth) {
    next() // 跳过校验登录
  } else {
    next(isLogin() ? undefined : {
      path: '/login'
    })
  }
}
