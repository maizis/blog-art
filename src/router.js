import Vue from 'vue'
import Router from 'vue-router'
import Connexion from './views/Connexion.vue'
import Posts from './views/Posts.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Connexion',
      component: Connexion
    },
    {
      path: '/posts',
      name: 'posts',
      component: Posts
    }
  ]
})
