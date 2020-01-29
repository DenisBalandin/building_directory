import Vue from 'vue'
import Router from 'vue-router'
import System from '@/components/System'

Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      name: 'System',
      component: System
    }
  ]
})
