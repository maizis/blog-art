<template>
  <div class="error">

    <div class="tile is-ancestor">
      <div class="tile is-parent">
        <div
          class="tile is-child"
        >
          <!-- 404 Image -->
          <img
            src="../assets/img/error.png"
            width="300px"
            style="margin-left:150px"
          >
        </div>

        <!-- About Presentation -->
        <div
          class="tile is-child"
          style="padding-top:100px"
        >
          <div class="title is-size-6 has-text-weight-light">
            <p class="is-size-3"> Oups, il semble que la page demandée est introuvable ! </p>
            <br>
            <br>
            <p class="is-size-6">
             Retourner à la
              <router-link
                to="/"
                class="has-text-weight-bold"
              >
                page principale
              </router-link>
            </p>
            <br>
            <p class="is-size-6">
             Retourner à la
              <a
                class="has-text-weight-bold"
                @click="$router.go(-1)"
              >
                page précédente
              </a>
            </p>


          </div>
        </div>
      </div>
    </div>
    </div>
</template>

<script>
export default {
  name: 'ErrorPage',
};
</script>

<style lang="scss" scoped>

.error {
  margin-top:30px
}
</style>
