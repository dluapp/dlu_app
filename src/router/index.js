import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/Home.vue'
import Data from '@/pages/data/Data.vue'

Vue.use(Router)
// 路由就是根据访问路径的不同返回不同的页面

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/data',
      name: 'Data',
      component: Data
    }
  ]
})
