<template>
  <div class="has-text-weight-light">
    <p style="margin-top:50px ">
      LE CONTENU EST RESERVÉ.
    </p>
    <p class="is-size-7">
      INSCRIVEZ-VOUS POUR ACCEDER AU ARTICLE
    </p>
    <!-- Signup Form -->
    <div class="signup-form">
      <div class="field">
        <div class="control">
          <br>
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
            id="mail"
            v-model="mail"
            class="input"
            type="email"
            name="Email"
            placeholder="E-mail"
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
          <br>
          <br>
          <a
            class="button is-overload"
            @click.prevent="inscription"
          > Inscription </a>
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
    };
  }
};
</script>

<style scoped lang="scss">
.signup-form {
  width:300px;
  height: 300px;
  margin: auto;
}
.button {
  left:30%
}
</style>
