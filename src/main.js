import Vue from 'vue'
import App from './App.vue'
import store from './store/'
import _ from 'lodash'
import storeMixin from './mixins/store'

Vue.prototype._ = _


Vue.config.productionTip = false


Vue.mixin(storeMixin); 


new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
