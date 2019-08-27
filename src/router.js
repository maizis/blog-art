import Vue from 'vue'
import store from '@/store'
import homeUser from './components/HomeUser.vue'
import Admin from './views/Admin.vue'
import Login from './views/Connexion.vue'
import Signup from './views/Inscription.vue'
import Posts from './views/Posts.vue'
import Article from './components/Article.vue'
import AdminHome from './components/AdminHome.vue'
import AdminUser from './components/AdminUser.vue'
import AdminPost from './components/AdminPost.vue'
import AdminSecu from './components/AdminSecu.vue'
import Router from 'vue-router'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'HomeUser',
      component: homeUser
    },
    {
      path: '/admin',
      component: Admin,
      beforeEnter: (to, from, next) => {
        if (store.getters.isAdmin) {
          next()
        } else {
          next('/')
        }
      },
      children: [
        { path: '/',
          name: 'AdminHome',
          component: AdminHome
        },
        { path: 'user',
          name: 'AdminUser',
          component: AdminUser
        },
        { path: 'post',
          name: 'AdminPost',
          component: AdminPost
        },
        { path: 'securite',
          name: 'AdminSecu',
          component: AdminSecu
        }
      ]
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/signup',
      name: 'signup',
      component: Signup
    },
    {
      path: '/posts/:id',
      name: 'article',
      component: Article,
      beforeEnter: (to, from, next) => {
        if (store.getters.isConnected) {
          next()
        } else {
          next('/')
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
