// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
// import vuex from 'vuex'; // 统一变量控制
import App from './App'
import router from './router'; // 路由
import ElementUI from 'element-ui'; // ele
import VueI18n from 'vue-i18n'; // ele多语言
// import store from './store'; // 统一变量控制

// import axios from 'axios'; // ajax
// import axiosfn from './actions/axios.js'; // 对ajax配置
// global.axios = axiosfn(axios,router); // 把axios放到全局
import '../static/css/icon.css';
Vue.config.productionTip = false

import 'element-ui/lib/theme-chalk/index.css';    // 默认主题
import "babel-polyfill";//兼容低版本

import echarts from 'echarts'
Vue.prototype.$echarts = echarts


// import VueCropper from 'vue-cropper' //图片裁剪
// Vue.use(VueCropper)


// Vue.use(vuex); // 统一变量控制
Vue.use(VueI18n); //  // 多语言
Vue.use(ElementUI, { // 引入eleUI组件 初始ele组件配置
  zIndex: 999,
  size:'small'
});

const messages = { // ele多语言
  zh: {
    ...require('element-ui/lib/locale/lang/zh-CN'),
    ...require('./common/lang/zh'),
  },
  en: {
    ...require('element-ui/lib/locale/lang/zh-CN'),
    ...require('./common/lang/en'),
  },
}
const i18n = new VueI18n({ // ele多语言
locale: 'zh', // set locale
messages, // set locale messages
})

// 使用钩子函数对路由进行权限跳转
// router.beforeEach((to, from, next) => {
//   const user = sessionStorage.getItem('sw_username');//用户名
//   if(to.meta.title) { //浏览器标签title
//       document.title = to.meta.title;
//   }
//   if(!user && to.path !== '/login'){
//       next('/login');
//   }else{
//       next();
//   }
// })


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  i18n,
  // store,//使用store
  components: {
    App,
  },
  template: '<App/>'
})
