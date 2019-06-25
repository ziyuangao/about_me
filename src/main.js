// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import vuex from 'vuex'; // 统一变量控制
import store from './store'; // 统一变量控制
import ElementUi from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App'
import router from './router'
import filters from './filter'
import echarts from 'echarts'
import axios from 'axios'; // ajax
import axiosfn from './actions/axios.js'; // 对ajax配置
global.axios = axiosfn(axios,router); // 把axios放到全局

Vue.prototype.$echarts = echarts

Object.keys(filters).forEach(k => Vue.filter(k, filters[k]));


Vue.use(vuex); // 统一变量控制

Vue.config.productionTip = false

Vue.use(ElementUi, { size: 'small', zIndex: 3000 });


new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
