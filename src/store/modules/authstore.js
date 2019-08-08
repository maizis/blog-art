export default ({
  state: {
    isConnected: false,
    isAdmin: false,
    correctusername: 'sarah',
    correctpassword: 'adagio',
    admin_user: 'admin',
    admin_password: 'admin'
  },
  getters: {
    isConnected: state => state.isConnected,
    isAdmin: state => state.isAdmin,
    correctusername: state => state.correctusername,
    correctpassword: state => state.correctpassword,
    admin_user: state => state.admin_user,
    admin_password: state => state.admin_password
  },
  actions: {
    turn_connected ({ commit }) {
      commit('SET_LOGIN')
    },
    turn_deconnected ({ commit }) {
      commit('SET_LOGOUT')
    },
    turn_admin ({ commit }) {
      commit('SET_ADMIN')
    }
  },
  mutations: {
    SET_LOGIN (state) {
      state.isConnected = true
    },
    SET_LOGOUT: (state) => {
      state.isConnected = false
      state.isAdmin = false
    },
    SET_ADMIN: (state) => {
      state.isAdmin = true
    }
  }
})
