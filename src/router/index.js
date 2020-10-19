import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

var routes = [
    {
      path: '/',
      redirect: '/index'
    },
    {
      path: '/home',
      component: resolve => require(['../components/common/Home.vue'], resolve),
      meta: {
        title: '自述文件'
      },
      children: [
        {
          path: '/index',
          component: resolve => require(['../components/index/index.vue'], resolve),
          meta: {
            title: '首页'
          }
        },
        {
          path: '/dailylife',
          component: resolve => require(['../components/dailylife/index.vue'], resolve),
          meta: {
            title: '日常'
          }
        },
        {
          path: '/resume',
          component: resolve => require(['../components/resume/index.vue'], resolve),
          meta: {
            title: '简历'
          }
        },
        {
          path: '/tools',
          component: resolve => require(['../components/tools/index.vue'], resolve),
          meta: {
            title: '工具'
          }
        },
        {
          path: '/photos',
          component: resolve => require(['../components/photos/index.vue'], resolve),
          meta: {
            title: '照片'
          }
        }
      ]
    },
    {
      path:'/other',
      component: resolve => require(['@/components/common/other.vue'], resolve)
    },
    {
      path: '/404',
      meta: { title: '后台管理系统' },
      component: resolve => require(['@/components/common/404.vue'], resolve)
    },
    {
      path: '*',
      redirect: '/404'
    }
  ]

export default new Router({
  mode: 'history',
  base: '/',
  routes: routes
})