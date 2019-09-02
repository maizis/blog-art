<template>
  <nav
    class="navbar is-size-6 has-text-weight-light"
    role="navigation"
    aria-label="main navigation"
  >
  <!--Menu Burger Button -->
    <div
      class="navbar-brand"
    >
      <a class="navbar-item" />
      <a
        role="button"
        class="navbar-burger"
        aria-label="menu"
        aria-expanded="false"
        data-target="navbarMenu"
        @click="isOpen = !isOpen" v-bind:class="{'is-active': isOpen}"
      >
        <span aria-hidden="true" />
        <span aria-hidden="true" />
        <span aria-hidden="true" />
      </a>
    </div>

    <!--Menu Content -->

    <div
      id="navbarMenu"
      class="navbar-menu"
       v-bind:class="{'is-active': isOpen}"
    >
    <!--Menu Content RIGHT -->
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

        <a class="navbar-item">
          <a><router-link to="/about"> About </router-link></a>
        </a>
        <a
          v-if="isConnected && isAdmin"
          class="navbar-item"
        >
          <a><router-link to="/admin">Admin</router-link></a>
        </a>
      </div>

      <!--Menu Content LEFT-->
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
              to="login"
            ><a @click="logout"> Déconnexion </a> </router-link>
          </a>
          <a class="navbar-item">
            <a v-if="!isConnected"> <router-link to="/signup"> Inscription </router-link> </a>
          </a>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Nav',
   data () {
    return {
      isOpen: false,
    }
  },
  computed: {
    isConnected () {
      return this.$store.getters.isConnected;
    },
    isAdmin () {
      return this.$store.getters.isAdmin;
    }
  },

  methods: {
    logout: function () {
      this.$store.dispatch('turnDeconnected');
    },
    dropdown: function () {

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
.general-footer {
  margin-top:30px
}
</style>
