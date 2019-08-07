<template>
  <div class="home3">
    <div>
      <img id="img2" alt="Vue logo" src="../assets/image4.png">
    </div>
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
  data () {
    return {
      turnform: true
    }
  },
  computed: {
    isConnected () {
      return this.$store.getters.isConnected
    }
  }
}
</script>
<style>
#img2 {
  width:200px;
}
.home3 {
  position:center;
  margin-top:40px;
}
</style>
