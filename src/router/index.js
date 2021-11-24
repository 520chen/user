import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login',
      name: 'login',
      component: () => import('@/views/login.vue')
    },
    {
      path:'/',
      redirect:'/login'
    },
    {
      path: '/home',
      name:'home',
      component: () => import('@/views/home.vue'),
      children: [
        {
          path: '/user-list',
          name: 'user-list',
          component: () => import('@/views/user/user-list')
        },
      ]
    },
  ]
})
