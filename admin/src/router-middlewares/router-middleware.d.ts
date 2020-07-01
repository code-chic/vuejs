import VueRouter, { Route, NavigationGuardNext } from 'vue-router'

declare interface RouterMiddlewareConfig {
  loca: 'before' | 'after'
  middlewareHandle: (to: Route, from: Route, next?: NavigationGuardNext) => any
}
