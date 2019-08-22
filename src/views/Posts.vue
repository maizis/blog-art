<template>
<div>
  <div class="section">
      <div class="columns is-centered">

        <div class="column is-8">
          <div class="card" v-for="(post, index) in posts.slice(-15)" :key=post.id>
            <header class="card-header">
              <router-link :to="'/posts/' + index">  <p class="card-header-title"> {{ post.title }} </p> </router-link>
            </header>
            <div class="card-content has-text-left">
              <div class="content"> {{ post.body }} </div>
            </div>
          </div>
        </div>

        <div class="column is-4">
          <div class="card">
            <header class="card-header">
              <div class="card-header-title">
                <p>Les 10 derniers posts</p>
              </div>
            </header>
            <div class="card-content">
              <div>
                <ul>
                  <li v-for="lastPost in lastPosts" :key=lastPost.id>
                     {{ lastPost.title }}
                  </li>
                </ul>
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
.card {
  &:not(:last-child) {
    margin-bottom: 1rem;
  }
}
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
