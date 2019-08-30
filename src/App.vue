<template>
  <div id="app">
    <!-- NavBar -->
    <Nav />
    <!-- Img and RouterView -->
    <section>
      <div class="columns is-mobile ">
        <div
          class="column is-10 is-offset-1"
          style="margin-top:30px"
        >
          <div class="img-home" />
          <router-view />
        </div>
      </div>
    </section>
    <!-- Footer -->
    <footer class="footer general-footer">
      <div class="content is-size-7 has-text-centered">
        Blog of the Art and History museum
        <br>
        <a> <router-link to="/about"> About </router-link> </a> .
        <a href="mailto:contact@example.com"> Contact </a> .
        <a> <router-link to="/"> Home </router-link> </a>
      </div>
    </footer>
  </div>
</template>

<script>
import Nav from '@/components/Nav.vue';

export default {
  components: {
    Nav
  },

};
</script>

<style lang="scss">
.navbar-brand {
  margin-left:100px;
  margin-top:10px;
}
.navbar-end {
  margin-right:80px;
}
.general-footer {
  margin-top:30px
}
</style>
