<template>
  <div class="has-text-weight-light">
    <!-- Message error connexion -->
    <p v-if="!fail" />
    <p v-else>
      {{ messagefail }}
    </p>
    <p style="margin-top:30px ">
      LE CONTENU EST RESERVÉ.
    </p>
    <p class="is-size-7">
      CONNECTEZ-VOUS POUR ACCEDER AU ARTICLE
    </p>
    <br>
    <!-- Connexion form -->
    <div id="form">
      <div class="field">
        <div class="control">
          <input
            id="username"
            v-model="username"
            class="input"
            type="text"
            name="username"
            placeholder="Pseudo"
            required
          >
          <br>
          <br>
          <input
            id="password"
            v-model="password"
            class="input"
            type="password"
            name="password"
            placeholder="Password"
            required
          >
        </div>
      </div>
      <br>
      <a
        class="button is-overload"
        @click.prevent="identification"
      > Connexion </a>
    </div>
    <a
      href=""
      class="forget is-size-8"
    > Mot de passe oublié ? </a>
  </div>
</template>

<script>
export default {
  name: 'LoginForm',

  data () {
    return {
      username: '',
      password: '',
      fail: false,
      messagefail: 'Echec de la connexion'
    }
  },

  computed: {
    randomUser () {
      return this.$store.getters.randomUser
    },
    randomPassword () {
      return this.$store.getters.randomPassword
    },
    adminUser () {
      return this.$store.getters.adminUser
    },
    adminPassword () {
      return this.$store.getters.adminPassword
    }
  },
  methods: {
    identification: function () {
      if (this.username === this.adminUser || this.password === this.adminPassword) {
        this.$store.dispatch('turnConnected')
        this.$store.dispatch('turnAdmin')
        this.$router.push('/admin')
      } else if (this.username === this.randomUser || this.password === this.randomPassword) {
        this.$store.dispatch('turnConnected')
        this.$router.push('/')
      } else {
        this.fail = true
      }
    }
  }
}
</script>

<style scoped lang="scss">
label {
  color: #42b983;
}
#form {
  position:center;
  width:300px;
  height: 200px;
  margin: 0 auto;
}
</style>
