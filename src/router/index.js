import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/lol'
    },
    {
      path: '/',
      component: resolve => require(['../components/common/Home.vue'], resolve),
      meta: {
        title: '自述文件'
      },
      children: [
        {
          path: '/lol',
          component: resolve => require(['../components/lol/index.vue'], resolve),
          meta: {
            title: 'LOL'
          },
        },
        {
          path: '/beautifulCover',
          component: resolve => require(['../components/lol/beautifulCover/index.vue'], resolve),
          meta: {
            title: '精美封面'
          },
        },
        {
          path: '/cloudTopGame',
          component: resolve => require(['../components/lol/cloudTopGame/index.vue'], resolve),
          meta: {
            title: '云顶之弈'
          },
        },
        {
          path: '/heroStory',
          component: resolve => require(['../components/lol/heroStory/index.vue'], resolve),
          meta: {
            title: '英雄故事'
          },
        },
        {
          path: '/polarBrawl',
          component: resolve => require(['../components/lol/polarBrawl/index.vue'], resolve),
          meta: {
            title: '大乱斗'
          },
        },
        {
          path: '/summonerCanyon',
          component: resolve => require(['../components/lol/summonerCanyon/index.vue'], resolve),
          meta: {
            title: '召唤师峡谷'
          },
        },
      ]
    },
    {
      path: '/404',
      meta: { title: '后台管理系统' },
      component: resolve => require(['@/components/page/404.vue'], resolve)
    },
    {
      path:'/login',
      meta:{title:'注册&登录'},
      component:resolve => require(['@/components/page/login.vue'],resolve)
    },
    {
      path: '*',
      redirect: '/404'
    }
  ]
})
