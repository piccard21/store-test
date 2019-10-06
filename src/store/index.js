import Vue from 'vue'
import Vuex from 'vuex'

import moduleA from './modules/a' 
import moduleB from './modules/b' 
import moduleC from './modules/c'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    a: moduleA,
    b: moduleB,
    c: moduleC
  },
  state: {
    count: 0
  },
  mutations: {
    increment (state) {
      state.count++
    }
  },
  actions: {

  },
  getters: {
      doubleCount (state) {
          return state.count * 2
      }
  }
})
