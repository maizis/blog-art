<template>
<div>
  <h1> Home </h1>
  <p v-if="!isConnected">Bonjour, Connectez-vous !  </p>
  <p v-else> Bienvenue ! </p>
</div>
</template>
<script>
export default {
  computed: {
    isConnected () {
      return this.$store.getters.isConnected
    }
  }
}
</script>
