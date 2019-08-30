<template>
  <div class="connexion">
    <div />
    <LoginForm />
  </div>
</template>

<script>
import LoginForm from '@/components/LoginForm.vue'

export default {
  name: 'Connexion',
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

<style>
#imgAstro {
  width:200px;
}
.connexion {
  margin-top:10px;
  text-align: center
}
</style>
