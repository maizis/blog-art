<template>
  <div>
    <!-- Menu de la page User -->
    <aside class="menu">
      <p class="menu-label">
        GENERAL
      </p>
      <ul class="menu-list">
        <li><a> <router-link to="/user"> Informations </router-link></a></li>
        <li><a> <router-link to="/error"> Securité </router-link></a></li>
      </ul>
      <p class="menu-label">
        ADMINISTRATION
      </p>
      <ul class="menu-list">
        <li><a><router-link to="/error"> Mes likes </router-link></a></li>
        <li><a> <router-link to="/error"> Mes commentaires </router-link> </a></li>
      </ul>
      <p class="menu-label">
        AUTRE
      </p>
      <ul class="menu-list">
        <li><a> <router-link to="/error"> Option 1 </router-link></a></li>
        <li><a> <router-link to="/error"> Option 2 </router-link></a></li>
      </ul>
    </aside>
  </div>
</template>

<script>
export default {
  name: 'UserMenu',
};
</script>

<style>
.menu {
  background-color: #fff;
  height: 500px;
  margin-top:20px;
}
.menu-label {
  padding-left:20px;
}
</style>
