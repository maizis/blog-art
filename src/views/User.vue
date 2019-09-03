<template>
  <!-- Users Vue -->
  <div style="margin-top:30px">
    <div class="columns">
      <div class="column is-3">
        <UserMenu/>
      </div>
      <div class="column is-9">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script>
import UserMenu from '@/components/User/UserMenu.vue';

export default {
  components: {
    UserMenu
  }
};
</script>

<style>
</style>
