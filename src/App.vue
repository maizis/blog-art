<template>
  <div id="app">
    <nav
      class="navbar is-size-6 has-text-weight-light"
      role="navigation"
      aria-label="main navigation"
    >
      <div class="navbar-brand">
        <a class="navbar-item" />
        <a
          role="button"
          class="navbar-burger burger"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
        >
          <span aria-hidden="true" />
          <span aria-hidden="true" />
          <span aria-hidden="true" />
        </a>
      </div>
      <div
        id="navbarBasicExample"
        class="navbar-menu"
      >
        <div class="navbar-start">
          <a class="navbar-item">
            <router-link to="/">  Home  </router-link>
          </a>

          <a
            v-if="isConnected"
            class="navbar-item"
          >
            <a><router-link to="/posts"> Articles </router-link></a>
          </a>
          <a
            v-else
            class="navbar-item has-text-grey-light"
          >
            Articles
          </a>

          <a
            v-if="isConnected"
            class="navbar-item"
          >
            <a><router-link to="/posts"> About </router-link></a>
          </a>
          <a
            v-if="isConnected && isAdmin"
            class="navbar-item"
          >
            <a><router-link to="/admin">Admin</router-link></a>
          </a>
        </div>
        <div class="navbar-end">
          <div class="navbar-item">
            <p v-if="isAdmin">
              Log as : admin
            </p>
            <a class="navbar-item" />
            <a class="navbar-item">
              <router-link
                v-if="!isConnected"
                to="login"
              >  Connexion </router-link>
              <router-link
                v-else
                to="/"
              ><a @click="logout"> Déconnexion </a> </router-link>
            </a>
            <a class="navbar-item">
              <a v-if="!isConnected"> <router-link to="/signup"> Inscription </router-link> </a>
            </a>
          </div>
        </div>
      </div>
    </nav>
    <section>
      <div class="columns is-mobile ">
        <div
          class="column is-10 is-offset-1"
          style="margin-top:30px"
        >
          <div class="img_home" />
          <router-view />
        </div>
      </div>
    </section>
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
.navbar-brand {
  margin-left:100px;
  margin-top:10px;
}
.navbar-end {
  margin-right:80px;
}
</style>
