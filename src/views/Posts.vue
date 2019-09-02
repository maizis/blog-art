<template>
  <div class="article-list">
    <!-- Article list with v-for -->
    <div
      class="tile is-ancestor"
      style="margin-top:20px;margin-bottom:20px"
    >
      <div
        v-for="post in posts"
        :key="post.id"
        class="tile is-parent"
      >
        <div class="tile">
          <router-link :to="'/posts/' + post.id">
            <div class=" card-post content">
              <div class="content-overlay" />
              <img
                class="content-image"
                src="https://picsum.photos/id/234/250/250"
              >
              <div class="content-text">
                <p class="is-size-4">
                  {{ post.title }}
                </p>
              </div>
            </div>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Posts',

  computed: {
    posts () {
      return this.$store.getters.posts;
    }
  },

  mounted () {
    this.$store.dispatch('showPosts');
  }
};
</script>

<style lang="scss" scoped>
.article-list {
  margin-top:50px
}
.content {
  position: relative;
  margin: auto;
  overflow: hidden;
}
.content .content-overlay {
  background: black;
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  opacity: 0;
}
.content:hover .content-overlay{
  opacity: 1;
}
.content-text {
  position: absolute;
  text-align: center;
  width: 100%;
  top: 50%;
  left: 50%;
  opacity: 0;
  transform: translate(-50%, -50%);
  color: #fff;
  font-size: 0.8em;
}
.content:hover .content-text{
  top: 50%;
  left: 50%;
  opacity: 1;
}

</style>
