import Vue from 'vue'
import router from '@/core/router'
import store from '@/core/store'
import App from 'page/App'

export default function initVue() {
  const app = new Vue({
    // 注入 vue-router 实例到 vue 对象内部
    router,
    // 注入 vuex.store 实例到 vue 对象内部
    store,
    template: `<App />`,
    components: { App }
  })

  // 暴露实例给入口文件
  return { app, router, store }
}
