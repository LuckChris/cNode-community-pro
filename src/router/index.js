import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home'
import Singin from '@/pages/singin'
import Singup from '@/pages/singup'
import About from '@/pages/about'
import Detail from '@/pages/detail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/singin',
      name: 'singin',
      component: Singin
    },
    {
      path: '/singup',
      name: 'singup',
      component: Singup
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/detail/:id',
      name: 'detail',
      component: Detail
    }
  ]
})
