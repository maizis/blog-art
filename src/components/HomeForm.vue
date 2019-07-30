<template>
<div class="form">
<p v-if="fail"> </p>
<p v-else>  {{messagefail}} </p>
  <div>
    <form method="post" id="app">
      <label for="username"> Username </label>  <br>
       <input type="text" name="username" v-model="username" id="username" required> <br>
      <label for="username"> Password </label>  <br>
       <input type="password" name="password" v-model="password" id="password" required>  <br><br>
      <button v-on:click.prevent="identification"> Connexion </button>
    </form>
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
      fail:true,
      messagefail: 'Echec de la connexion',
    }
  },
  methods: {
    identification: function () {
      if (this.username !== this.correctusername || this.password !== this.correctpassword) {
        this.fail = false
      } else {
        this.$emit('user:connected', true)
      }
    }
  }
}
</script>
<style scoped lang="scss">
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
label {
  color: #42b983;
}
</style>
