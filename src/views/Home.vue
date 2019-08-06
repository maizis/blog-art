<template>

<div>
  <section class="hero is-primary is-medium">
  <div class="hero-body">
    <div class="container">
      <h1 v-if="!isConnected">Bonjour, connectez-vous !  </h1>
  <h1 v-else> Bienvenue ! </h1>
    </div>
  </div>
</section>


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

