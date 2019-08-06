<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
      <SignupForm/>
  </div>
</template>

<script>
// @ is an alias to /src
import SignupForm from '@/components/SignupForm.vue'

export default {
  name: 'signup',
  components: {
    SignupForm
  },
  data () {
    return {
    }
  }
}
</script>
<style>
</style>
