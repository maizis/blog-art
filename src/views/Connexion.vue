<template>
  <div class="connexion">
    <div>
      <img id="imgAstro" alt="imgAstro" src="../assets/imgAstro.png">
    </div>
    <LoginForm/>
  </div>
</template>

<script>
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

<style>
#imgAstro {
  width:200px;
}
.connexion {
  margin-top:10px;
}
</style>
