import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import router from './router'
import DB from './until/indexeddb'
import request from '@/until/request'
import './until/easytable'
import './assets/style/index.css'

Vue.use(ElementUI);

Vue.prototype.$db = new DB()
Vue.prototype.$axios = request

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
