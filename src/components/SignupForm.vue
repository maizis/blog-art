<template>
  <div class="has-text-weight-light">
    <p style="margin-top:50px ">
      LE CONTENU EST RESERVÉ.
    </p>
    <p class="is-size-7">
      INSCRIVEZ-VOUS POUR ACCEDER AU ARTICLES
    </p>
    <!-- Signup Form -->
    <form class="signup-form">
      <div class="field">
        <br>
        <div class="control has-icons-left">
          <span class="icon is-small is-left">
            <img src="https://img.icons8.com/ios/16/000000/user.png">
          </span>
          <input
            id="username"
            v-model="username"
            class="input"
            type="text"
            name="username"
            placeholder="Pseudo"
            autocomplete="username"
            required
          >
          </div>
          <br>
        <div class="control has-icons-left">
          <span class="icon is-small is-left">
            <img src="https://img.icons8.com/ios/16/000000/new-post.png">
          </span>
          <input
            id="mail"
            v-model="mail"
            class="input"
            type="email"
            name="Email"
            placeholder="E-mail"
            autocomplete="email"
            required
          >
          </div>
          <br>
        <div class="control has-icons-left">
          <span class="icon is-small is-left">
            <img src="https://img.icons8.com/ios/16/000000/password--v2.png">
          </span>
          <input
            id="password"
            v-model="password"
            class="input"
            type="password"
            name="password"
            placeholder="Password"
            autocomplete="password"
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
    </form>
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
