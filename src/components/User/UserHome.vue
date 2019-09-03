<template>
  <div class="user-home">

    <div class="tile is-ancestor">
      <div class="tile is-parent">
        <div class="tile is-child">
          <p class="title">
            <img src="https://picsum.photos/id/1027/170/170">
          </p>
        </div>
      </div>
       <div class="tile is-9 is-vertical is-parent">
        <div class="tile is-child ">
          <div style="margin-top:30px">
            <p class="is-size-5">
              Lauren Mercier
            </p>
            <br>
            <p class="is-size-7">
              <strong> Sign up : </strong>
              23.12.2016
              <br>
              <strong> last log : </strong>
              12.08.2019 at 08:39
            </p>
            <p
              class="is-size-7"
              style="margin-top:10px"
            >
              <strong> Contributions : </strong>
              <br>
              23 likes / 30 commentaires
            </p>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'UserHome',
};
</script>

<style lang="scss" scoped>

.user-home {
  margin-top:20px
}
</style>
