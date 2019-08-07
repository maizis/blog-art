
<template>
  <div class>
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
  </div>
</template>
<script>
export default {
  name: 'HomeForm',
  data () {
    return {
      username: '',
      password: '',
      correctusername: 'sarah',
      correctpassword: 'adagio',
      fail: true,
      messagefail: 'Echec de la connexion'
    }
  },
  methods: {
    identification: function () {
      if (this.username !== this.correctusername || this.password !== this.correctpassword) {
        this.fail = false
      } else {
        this.$store.dispatch('turn_connected')
        this.$router.push('/')
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
height: 500px;
margin: 0 auto;
}
</style>
