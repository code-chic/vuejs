import Vue from 'vue'
import Vuex from 'vuex'

// install `vuex` plugin!
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count: 0 // test data.
  }
})
