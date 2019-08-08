<template>
  <div>
    <p v-if="fail"> </p>
    <p v-else>  {{messagefail}} </p>
      <div id="form">
         <div class="field">
          <div class="control">
            <br>
            <input class="input" type="text" name="username" v-model="username" id="username"  placeholder="Pseudo" required>
             <br>
             <br>
            <input class="input" type="password" name="password" v-model="password" id="password"  placeholder="Password" required>
          </div>
        </div>
          <br>
            <a class="button is-primary" v-on:click.prevent="identification"> Connexion </a>
       </div>
      <a href="" class="forget is-size-8"> Mot de passe oublié ? </a>
  </div>
</template>

<script>
export default {
  name: 'HomeForm',
  data () {
    return {
      username: '',
      password: '',
      fail: true,
      messagefail: 'Echec de la connexion'
    }
  },
  computed: {
    correctusername () {
      return this.$store.getters.correctusername
    },
    correctpassword () {
      return this.$store.getters.correctpassword
    },
    admin_user () {
      return this.$store.getters.admin_user
    },
    admin_password () {
      return this.$store.getters.admin_password
    }
  },
  methods: {
    identification: function () {
      if (this.username === this.admin_user || this.password === this.admin_password) {
        this.$store.dispatch('turn_connected')
        this.$store.dispatch('turn_admin')
        this.$router.push('/config')
      } else if (this.username === this.correctusername || this.password === this.correctpassword) {
        this.$store.dispatch('turn_connected')
        this.$router.push('/')
      } else {
        this.fail = false
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
