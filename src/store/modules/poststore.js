import axios from 'axios';

export default ({
  state: {
    posts: [],
    post: {}
  },

  getters: {
    posts: state => state.posts,
    post: state => state.post
  },

  actions: {
    showPosts ({ commit }) {
      axios
        .get('https://my-json-server.typicode.com/maizis/blog-art-fakeApi/posts')
        .then(response => response.data)
        .then(posts => { commit('SET_POSTS', posts); });
    },
    showPost ({ commit }, ob) {
      return axios
        .get(`https://my-json-server.typicode.com/maizis/blog-art-fakeApi/posts/${ob.id}`)
        .then(response => {
          return response.data;
        })
        .then(post => {
          commit('SET_POST', post);
          return post;
        });
      // .then(response => (this.chosenRoute = response.data))
    }

  },
  mutations: {
    SET_POSTS (state, posts) {
      state.posts = posts;
    },
    SET_POST (state, post) {
      state.post = post;
    }
  }
});
