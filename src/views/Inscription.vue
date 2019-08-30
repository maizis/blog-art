<template>
  <div class="inscription">
    <SignupForm />
  </div>
</template>

<script>
import SignupForm from '@/components/SignupForm.vue';

export default {
  name: 'Signup',

  components: {
    SignupForm
  },

  data () {
    return {
    };
  }
};
</script>

<style>
.inscription {
  text-align: center
}
</style>
