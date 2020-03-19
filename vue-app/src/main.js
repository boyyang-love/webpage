import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'

import echarts from "echarts";
Vue.prototype.$echarts = echarts;

import axios from 'axios';
Vue.prototype.$axios = axios;
import '@/assets/fonts/iconfont.css'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')