import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Top from '@/components/Top'
import Box from '@/components/Box'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/top',
      name: 'Top',
      component: Top
    },
    {
      path: '/box',
      name: 'Box',
      component: Box
    }
  ]
})
