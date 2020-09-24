import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/yys'
    },
    {
      path: '/home',
      component: resolve => require(['../components/common/Home.vue'], resolve),
      meta: {
        title: '自述文件'
      },
      children: [
        // YYS
        {
          path: '/yys',
          component: resolve => require(['../components/yys/index.vue'], resolve),
          meta: {
            title: '资源获取'
          },
        },
        {
          path: '/reward',
          component: resolve => require(['../components/yys/reward.vue'], resolve),
          meta: {
            title: '悬赏封印'
          },
        },
        {
          path: '/questions',
          component: resolve => require(['../components/yys/questions.vue'], resolve),
          meta: {
            title: '逢魔之时答题'
          },
        },
        {
          path: '/break_through',
          component: resolve => require(['../components/yys/break_through.vue'], resolve),
          meta: {
            title: '突破/道馆'
          },
        },
        // LOL
        {
          path: '/search',
          component: resolve => require(['../components/lol/index.vue'], resolve),
          meta: {
            title: '韩服查询'
          },
        },
        {
          path: '/teamfightTactics',
          component: resolve => require(['../components/lol/teamfightTactics.vue'], resolve),
          meta: {
            title: '云顶之弈'
          },
        },{
          path: '/digitalModel',
          component: resolve => require(['../components/digitalModel/index.vue'], resolve),
          meta: {
            title: '数字模型'
          }
        },
        // 测试
        {
          path: '/test',
          component: resolve => require(['../components/test/index.vue'], resolve),
          meta: {
            title: '测试'
          }
        }
      ]
    },
    {
      path:'/other',
      component: resolve => require(['@/components/page/other.vue'], resolve)
    },
    {
      path: '/404',
      meta: { title: '后台管理系统' },
      component: resolve => require(['@/components/page/404.vue'], resolve)
    },
    {
      path: '*',
      redirect: '/404'
    }
  ]
})
