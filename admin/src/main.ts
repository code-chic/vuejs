import Vue from 'vue'
import ElementUI from 'element-ui'
import './less/index.less'
import router from '@/router'
import App from '@/pages/App.vue'

// install element-ui
Vue.use(ElementUI)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
