import Vue from 'vue'
import Echarts from 'echarts'
import ElementUI from 'element-ui'
import './less/index.less'
import router from '@/router'
import App from '@/pages/App.vue'

// install element-ui
Vue.use(ElementUI)

// 挂载 echarts 插件到 vue 原型对象上
Vue.prototype.$echarts = Echarts

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
