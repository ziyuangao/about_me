import Vue from 'vue'
import App from './App'
import router from './router'; // 路由
import ElementUI from 'element-ui'; // ele
import VueI18n from 'vue-i18n'; // ele多语言

import '../static/css/icon.css';
Vue.config.productionTip = false

import 'element-ui/lib/theme-chalk/index.css';    // 默认主题
import "babel-polyfill";//兼容低版本

import echarts from 'echarts'
Vue.prototype.$echarts = echarts

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

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  i18n,
  components: {
    App,
  },
  template: '<App/>'
})
