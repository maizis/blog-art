<template>
  <div id="app">
    <nav class="navbar" role="navigation" aria-label="main navigation">

      <div class="navbar-brand">
        <a class="navbar-item" href="https://bulma.io">
          <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28">
        </a>
        <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div id="navbarBasicExample" class="navbar-menu">
        <div class="navbar-start">
          <a class="navbar-item">
           <router-link to="/"> Home </router-link>
          </a>
          <a class="navbar-item">
             <a v-if="isConnected"><router-link to="/posts"> Post</router-link></a>
          </a>
          <a class="navbar-item">
             <a v-if="isConnected && isAdmin"><router-link to="/config"> Config </router-link></a>
          </a>
        </div>

        <div class="navbar-end">
          <div class="navbar-item">
            <p v-if="isAdmin"> Log as : admin </p>
            <a class="navbar-item">
          </a>
            <div class="buttons">
              <a class="button is-outline">
                <router-link v-if="!isConnected" to="/login"> <strong> Connexion </strong> </router-link>
                 <a href="" v-else v-on:click="logout"> <strong> Déconnexion </strong> </a>
              </a>
              <a class="button is-outline" v-if="!isConnected"> <router-link to="/signup"> Inscription </router-link> </a>
            </div>
          </div>
        </div>
      </div>

    </nav>
  <router-view/>
  </div>
</template>

<script>
export default {
  computed: {
    isConnected () {
      return this.$store.getters.isConnected
    },
    isAdmin () {
      return this.$store.getters.isAdmin
    }
  },

  methods: {
    logout: function () {
      this.$store.dispatch('turnDeconnected')
    }
  }
}
</script>

<style lang="scss">
#app {
  text-align: center;
}
</style>
