import axios from 'axios'

export default ({
  state: {
    posts: []
  },
  getters: {
    posts: state => state.posts
  },
  actions: {
    showPosts ({ commit }) {
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