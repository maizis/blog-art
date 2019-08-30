<template>
  <div>
    <!-- Search field -->
    <div
      class="tile is-ancestor"
      style="margin-top:20px"
    >
      <div class="tile is-parent">
        <div class="tile">
          <div class="field has-addons">
            <div class="control">
              <input
                v-model="search"
                class="input"
                type="text"
                placeholder="Find a repository"
              >
            </div>
            <div class="control">
              <a class="button is-info"> Search </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Article list with v-for -->
    <div
      v-for="post in posts"
      :key="post.id"
      class="tile is-ancestor"
      style="margin-top:20px"
    >
      <div class="tile is-parent">
        <div
          class="tile"
          style="margin-right:40px"
        >
          <router-link :to="'/posts/' + post.id">
            <div class="postCard card">
              <div class="card-image">
                <figure class="image is-2by1">
                  <img src="http://placeimg.com/640/300/arch">
                </figure>
              </div>
              <div class="card-content">
                <div class="media">
                  <div class="media-content">
                    <p class="title is-6">
                      {{ post.title }}
                    </p>
                    <p class="subtitle is-7">
                      {{ post.subtitle }}
                    </p>
                  </div>
                </div>
                <div class="extrait content">
                  {{ post.body }}
                  <br>
                  <br>
                  <time
                    class="is-pulled-right is-size-7"
                    datetime="2016-1-1"
                  >{{ post.date_upload }}</time>
                  <br>
                </div>
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
  data () {
    return {
      search:''
    }
  },

  computed: {
    posts () {
      return this.$store.getters.posts
    },
  },
  mounted () {
    this.$store.dispatch('showPosts')
  }
}
</script>

<style lang="scss" scoped>
li {
  text-align: left;
  overflow:hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
ul {
  list-style: inside disc;
}
.postCard {
  width: 900px;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
}
</style>
