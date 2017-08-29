import Vue from 'vue'
import Router from 'vue-router'
import Movie from '@/page/Movie'
import Nowin from '@/page/MovieNowIn'
import Soon from '@/page/MovieSoon'
import MovieContent from '@/page/MovieContent'

Vue.use(Router)

export default new Router({
  routes: [
    /*{
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
    },
    {
      path: '/item',
      name: 'Item',
      component: Item
    },*/
    {
      path: '*',
      name: 'index',
      component: Movie
    },
    {
      path: '/movie',
      name: 'Movie',
      component: Movie
    },
    {
      path: '/movienowin',
      name: 'Nowin',
      component: Nowin
    },
    {
      path: '/moviesoon',
      name: 'Soon',
      component: Soon
    },
    {
      path: '/mc',
      name: 'MovieContent',
      component: MovieContent
    }
  ]
})
