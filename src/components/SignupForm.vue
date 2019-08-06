<template>
<div class="form">
<p> </p>
  <div>
    <form method="post" id="inscription">
      <label for="username"> Username </label>  <br>
       <input type="text" name="username" v-model="username" id="username" required> <br>
      <label for="password"> Password </label>  <br>
       <input type="password" name="password" v-model="password" id="password" required> <br>
       <label for="mail"> Email </label>  <br>
       <input type="mail" name="mail" v-model="password" id="mail" required>  <br><br>
      <button v-on:click.prevent="identification"> Inscription </button>
    </form>
  </div>
</div>
</template>
<script>
export default {
  name: 'SignupForm',
  data () {
    return {
      username: '',
      password: ''
    }
  }
}
</script>
<style scoped lang="scss">

label {
  color: #42b983;
}
</style>
