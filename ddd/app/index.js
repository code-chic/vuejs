import Vue from 'vue'
import App from '@/views/App'
import router from '@/router'

import '@/styled/index.css'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
