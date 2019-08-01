
export default ({
  state: {
    isConnected: false
  },
  getters: {
    isConnected: state => state.isConnected
  },
  actions: {
    turn_connected ({ commit }) {
      commit('SET_LOGIN')
    },
    turn_deconnected ({ commit }) {
      commit('SET_LOGOUT')
    }
  },
  mutations: {
    SET_LOGIN (state) {
      state.isConnected = true
    },
    SET_LOGOUT: (state) => {
      state.isConnected = false
    }
  }
})
