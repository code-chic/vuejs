import VueRouter from 'vue-router'
import verifyLoginAuthenticate from './verifyLoginAuthenticate.m'

const middlewares: any[] = [
  verifyLoginAuthenticate
]

export default function useMiddleware (router: VueRouter) {
  middlewares.forEach(item => router.beforeEach(item))
}
