import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login', 
      component: resolve => require(['../components/page/login/login.vue'], resolve)
    },
    {
      path: '/pos',
      component: resolve => require(['../components/page/pos.vue'], resolve)
    }
  ]
})
