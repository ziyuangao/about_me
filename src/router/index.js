import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/home'
    },{
      path:'/home',
      component: resolve => require(['@/components/common/index.vue'],resolve)
    },{
      path:'/dailyLife',
      component: resolve => require(['@/components/dailyLife/index.vue'],resolve)
    },{
      path: '/404',
      component: resolve => require(['@/components/page/404.vue'], resolve)
    },{
      path: '*',
      redirect: '/404'
    }
  ]
})
