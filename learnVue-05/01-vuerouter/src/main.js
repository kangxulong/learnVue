import Vue from 'vue'
// @ts-ignore
import App from './App'
import router from './router/index'

Vue.config.productionTip = false

/* eslint-disable no-new */
// @ts-ignore
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
