import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Mint from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(Mint)
Vue.use(VueRouter)

new Vue({
  el: '#app',
  render: h => h(App)
})
