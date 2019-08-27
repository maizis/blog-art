<template>
  <div>
    <div class="tile is-ancestor" style="margin-top:20px">
      <div class="tile is-parent">
         <div class="tile"> Barre de recherche
          </div>
      </div>
    </div>

    <div class="tile is-ancestor" style="margin-top:20px">
      <div class="tile is-parent">
        <div class="tile" style="margin-right:40px">
          <div class="card">
            <div class="card-image">
            <figure class="image is-2by1">
              <img src="https://bulma.io/images/placeholders/1280x960.png">
            </figure>
          </div>
          <div class="card-content">
            <div class="media">
              <div class="media-content">
                <p class="title is-6">L'art contemporain en Allemagne </p>
                <p class="subtitle is-7"> Une histoire d'art </p>
              </div>
            </div>
            <div class="content">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Phasellus nec iaculis mauris [...]
              <br>
              <time class="is-pulled-right is-size-7" datetime="2016-1-1"> 01 Janvier 2016</time>
              <br>
            </div>
          </div>
        </div>
      </div>

      <div class="tile">
          <div class="card">
            <div class="card-image">
            <figure class="image is-2by1">
              <img src="https://bulma.io/images/placeholders/1280x960.png">
            </figure>
          </div>
          <div class="card-content">
            <div class="media">
              <div class="media-content">
                <p class="title is-6">L'art contemporain en Allemagne </p>
                <p class="subtitle is-7"> Une histoire d'art </p>
              </div>
            </div>
            <div class="content">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Phasellus nec iaculis mauris [...]
              <br>
              <time class="is-pulled-right is-size-7" datetime="2016-1-1"> 01 Janvier 2016</time>
              <br>
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>
  </div>
</template>

<script>

export default {
  name: 'posts',
  data () {
    return {
    }
  },
  mounted () {
    this.$store.dispatch('showPosts')
  },

  computed: {
    posts () {
      return this.$store.getters.posts
    },
    lastPosts () {
      return this.posts.slice(-10)
    }
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
</style>
