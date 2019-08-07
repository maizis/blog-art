<template>
  <div class="home1">
    <img id="img1" alt="Vue logo" src="../assets/image4.png">
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
#img1 {
  width:200px;
  margin-top:40px;
}

</style>
