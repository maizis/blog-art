import Vue from 'vue'
import store from '@/store'
import Home from './views/Home.vue'
import Login from './views/Connexion.vue'
import Posts from './views/Posts.vue'
import Router from 'vue-router'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
      beforeEnter: (to, from, next) => {
        if (!store.getters.isConnected) {
          next()
        } else {
          next(router.push({ path: '/' }))
          //Finir la redirection vers la homme
        }
      }
    },
    {
      path: '/posts',
      name: 'posts',
      component: Posts,
      beforeEnter: (to, from, next) => {
        if (store.getters.isConnected) {
          next()
        } else {
          next('/')
        }
      }
    }
  ]
})
export default router
