export default ({
  state: {
    isConnected: false,
    isAdmin: false,
    randomUser: 'sarah',
    randomPassword: 'adagio',
    adminUser: 'admin',
    adminPassword: 'admin'
  },

  getters: {
    isConnected: state => state.isConnected,
    isAdmin: state => state.isAdmin,
    randomUser: state => state.randomUser,
    randomPassword: state => state.randomPassword,
    adminUser: state => state.adminUser,
    adminPassword: state => state.adminPassword
  },

  actions: {
    turnConnected ({ commit }) {
      commit('SET_LOGIN');
    },
    turnDeconnected ({ commit }) {
      commit('SET_LOGOUT');
    },
    turnAdmin ({ commit }) {
      commit('SET_ADMIN');
    }
  },

  mutations: {
    SET_LOGIN (state) {
      state.isConnected = true;
    },
    SET_ADMIN: (state) => {
      state.isAdmin = true;
    },
    SET_LOGOUT: (state) => {
      state.isConnected = false;
      state.isAdmin = false;
    }
  }
});
