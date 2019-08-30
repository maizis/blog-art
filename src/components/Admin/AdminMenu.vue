<template>
  <div>
    <!-- Menu de la page Admin -->
    <aside class="menu">
      <p class="menu-label">
        GENERAL
      </p>
      <ul class="menu-list">
        <li><a> <router-link to="/admin"> Informations </router-link></a></li>
        <li><a> <router-link to="/admin/securite"> Securité </router-link></a></li>
      </ul>
      <p class="menu-label">
        ADMINISTRATION
      </p>
      <ul class="menu-list">
        <li><a><router-link to="/admin/user"> Users </router-link></a></li>
        <li><a> <router-link to="/admin/post"> Posts </router-link> </a></li>
      </ul>
      <p class="menu-label">
        AUTRE
      </p>
      <ul class="menu-list">
        <li><a> <router-link to=""> Option 1 </router-link></a></li>
        <li><a> <router-link to=""> Option 2 </router-link></a></li>
      </ul>
    </aside>
  </div>
</template>

<script>
export default {
  name: 'AdminMenu',
};
</script>

<style>
.menu {
  background-color: #fff;
  height: 500px;
  margin-top:50px;
}
.menu-label {
  padding-left:20px;
}
</style>
