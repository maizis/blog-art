<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home </router-link> |
      <router-link v-if="!isConnected" to="/login">Connexion </router-link>
      <a href="" v-else v-on:click="logout"> Déconnexion </a>
     | <router-link to="/posts">Post</router-link>
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  computed: {
    isConnected() {
      return this.$store.getters.isConnected
    }
  },
  methods: {
    logout: function () {
    this.$store.dispatch('turn_deconnected')
    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
