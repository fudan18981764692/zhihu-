import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import IndexComponent from '@/components/index'
import headerComponent from '@/components/common/header'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'IndexComponent',
      component: IndexComponent
    },
    // 测试
    {
      path: '/header',
      name: 'headerComponent',
      component: headerComponent
    }
  ]
})
