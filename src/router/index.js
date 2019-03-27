import Vue from 'vue'
import Router from 'vue-router' 
import Login from '@/components/page/Login.vue'
import Home from '@/components/common/Home.vue'

import Role from '@/components/page/authentication/role/Role.vue'
import User from '@/components/page/authentication/user/User.vue'
import Feedback from '@/components/page/authentication/feedback/Feedback.vue'
import Enter from '@/components/page/authentication/enter/Enter.vue'
import Token from '@/components/page/authentication/token/Token.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/', 
      component: Home,
      children: [
        {
          path: '/Role', 
          component: Role,
          
        },
        {
          path: '/User', 
          component: User
        },
        {
          path: '/Feedback', 
          component: Feedback
        },
        {
          path: '/Enter', 
          component: Enter
        },
        {
          path: '/Token', 
          component: Token
        }

      ]
    },
    {
      path: '/Login', 
      component: Login
    }
  ]
})
