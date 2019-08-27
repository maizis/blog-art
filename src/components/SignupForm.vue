<template>
  <div class="has-text-weight-light">
        <p style="margin-top:30px "> LE CONTENU EST RESERVÉ. </p>
    <p class="is-size-7"> INSCRIVEZ-VOUS POUR ACCEDER AU ARTICLE </p>
    <div id="form">
      <div class="field">
        <div class="control">
          <br>
          <input class="input" type="text" name="username" v-model="username" id="username"  placeholder="Pseudo" required>
            <br>
            <br>
          <input class="input" type="email" name="Email" v-model="mail" id="mail"  placeholder="E-mail" required>
            <br>
            <br>
          <input class="input" type="password" name="password" v-model="password" id="password"  placeholder="Password" required>
            <br>
            <br>
          <a class="button is-overload" v-on:click.prevent="inscription"> Inscription </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SignupForm',
  data () {
    return {
      username: '',
      password: '',
      mail: ''
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
  height: 100px;
  margin: auto;
}
.button {
  position:center;
  left:30%
}
</style>
