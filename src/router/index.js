import Vue from 'vue'
import Router from 'vue-router' 
import Login from '@/components/page/Login.vue'
import Home from '@/components/common/Home.vue'

import Role from '@/components/page/authentication/role/Role.vue'
import User from '@/components/page/authentication/user/User.vue'
import Feedback from '@/components/page/authentication/feedback/Feedback.vue'
import Enter from '@/components/page/authentication/enter/Enter.vue'
import Token from '@/components/page/authentication/token/Token.vue'
import authentication from '@/components/page/authentication/authentication.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/', 
      component: Home,
      children: [
        {
          path: '/auth', 
          component: authentication,
          redirect:'/auth/role',
          children:[
            {path:'/auth/user',component:User},
            {path:'/auth/role',component:Role},
            {path:'/auth/Feedback',component:Feedback},
            // {path:'/auth/Feedback',component:Feedback},
            {path:'/auth/Enter',component:Enter},
            {path:'/auth/Token',component:Token},
          ]
          
        }
     
      ]
    },
    {
      path: '/Login', 
      component: Login
    }
  ]
})
