<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <LoginForm/>
  </div>
</template>

<script>
// @ is an alias to /src
import LoginForm from '@/components/LoginForm.vue'

export default {
  name: 'connexion',
  components: {
    LoginForm
  },
  computed: {
    isConnected () {
      return this.$store.getters.isConnected
    }
  }
}
</script>
