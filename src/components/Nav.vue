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
        :class="{'is-active': isOpen}"
        @click="isOpen = !isOpen"
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
      :class="{'is-active': isOpen}"
    >
      <!--Menu Content RIGHT -->
      <div class="navbar-start">
        <router-link to="/">
          <a class="navbar-item">
            <a> Home</a>
          </a>
        </router-link>

        <router-link
          v-if="isConnected"
          to="/posts"
        >
          <a class="navbar-item"> <a>Articles</a>
          </a>
        </router-link>

        <div v-else>
          <a class="navbar-item has-text-grey-light"
          > Articles
          </a>
        </div>

        <router-link to="/about">
          <a class="navbar-item">
            <a>About</a>
          </a>
        </router-link>

        <router-link to="/admin">
          <a
            v-if="isConnected && isAdmin"
            class="navbar-item"
          >
            <a>Admin</a>
          </a>
        </router-link>
      </div>

      <!--Menu Content LEFT-->
      <div class="navbar-end">
        <div class="navbar-item">
          <p
            v-if="isAdmin"
            class="navbar-item"
          >
            Log as : admin
          </p>

          <!--Connexion / Deconnexion -->
          <router-link
            v-if="!isConnected"
            to="login"
          >
            <a class="navbar-item">
              <a> Connexion</a>
            </a>
          </router-link>

          <router-link
            v-else
            to="login"
          >
            <a class="navbar-item">
              <a @click="logout"> Déconnexion </a>
            </a>
          </router-link>

          <!-- Inscription -->
          <router-link
            to="signup"
            v-if="!isConnected"
          >
            <a class="navbar-item">
              <a> Inscription  </a>
            </a>
          </router-link>
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
    };
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
};
</script>

<style lang="scss">
.navbar-brand {
  margin-left:100px;
}

.navbar-end {
  margin-right:80px;
}
.navbar-start {
  margin-top:15px;
}

.general-footer {
  margin-top:30px
}
</style>
