<template>
  <div class="inscription">
    <img id="imgAstro" alt="imgAstro" src="../assets/imgAstro.png">
      <SignupForm/>
  </div>
</template>

<script>
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
#imgAstro {
  width:200px;
  margin-top:40px;
}
.inscription {
  margin-top:10px;
  text-align: center
}
</style>
