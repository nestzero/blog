import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugins/element.js'

import api from './apis'

import '@/assets/css/base.css'

import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import '@/assets/font/iconfont.css'

Vue.use(Element)

Vue.config.productionTip = false

Vue.prototype.$api=api

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')