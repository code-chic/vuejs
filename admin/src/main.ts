import Vue from 'vue'
import ElementUI from 'element-ui'
import '@/styled/element-ui/index.scss'
import '@/styled/less/index.less'
import router from '@/router'
import App from '@/pages/App.vue'

// Install element-ui component library.
Vue.use(ElementUI, { size: 'small' })

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
