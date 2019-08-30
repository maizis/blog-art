<template>
  <div class="home">
    <div>
      <HomeUser />
      <AdminUser v-if="isAdmin && isConnected" />
    </div>
  </div>
</template>

<script>
import HomeUser from '@/components/HomeUser.vue'
import HomeAdmin from '@/components/Admin/AdminHome.vue'

export default {
  name: 'Home',
  components: {
    HomeUser,
    HomeAdmin
  },

  computed: {
    isAdmin () {
      return this.$store.getters.isAdmin
    },
    isConnected () {
      return this.$store.getters.isConnected
    }
  }

}
</script>

<style>
#imgAstro {
  width:200px;
}
.connexion {
  margin-top:10px;
}
</style>
