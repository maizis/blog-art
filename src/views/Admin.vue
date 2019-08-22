<template>
  <div class="section">
    <div class="columns">
        <div class="column">
          <AdminMenu/>
        </div>
        <div class="column is-9">
          <router-view />
        </div>
    </div>
  </div>
</template>

<script>
import AdminMenu from '@/components/AdminMenu.vue'
import ModalForm from '@/components/ModalForm.vue'

export default {
  components: {
    AdminMenu,
    ModalForm,
  },
  methods: {
  }
}
</script>
<style>
.section {
  margin-top:20px;
}
</style>
