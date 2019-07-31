import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    posts: []
  },
  actions: {
    showposts ({ commit }) {
      axios
        .get('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.data)
        .then(posts => { commit('SET_POSTS', posts) })
    }
  },
  mutations: {
    SET_POSTS (state, posts) {
      state.posts = posts
    }
  }
})
