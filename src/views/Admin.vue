<template>
  <!-- Admin Vue -->
  <div style="margin-top:30px">
    <div class="columns">
      <div class="column is-3">
        <AdminMenu />
      </div>
      <div class="column is-9">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script>
import AdminMenu from '@/components/Admin/AdminMenu.vue';

export default {
  components: {
    AdminMenu
  }
};
</script>

<style>
</style>
