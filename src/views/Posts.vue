<template>
  <div class="section">
    <div class="container">
      <div class="columns">
        <div class="column is-8">
          <div class="card" v-for="post in posts" :key=post.id>
            <header class="card-header">
              <p class="card-header-title">
                {{ post.title }}
              </p>
            </header>
            <div class="card-content">
              <div class="content">
                {{ post.body }}
              </div>
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
                  <li v-for="last_post in last_posts" :key=last_post.id>
                    {{last_post.title}}
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
  mounted () {
    this.$store.dispatch('showPosts')
  },
  computed: {
    posts () {
      return this.$store.getters.posts
    },
    last_posts () {
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
