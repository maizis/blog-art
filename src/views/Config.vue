<template>
  <div>
    <div class="section">
      <div class="columns">
        <div class="column is-4">
          <div class="card">
            <header class="card-header">
              <p class="card-header-title">Section de modification</p>
            </header>
            <div class="card-content">
              <div class="content">
              </div>
            </div>
          </div>
        </div>

        <div class="column is-4">
          <div class="card">
            <header class="card-header">
              <p class="card-header-title">Section de modification</p>
            </header>
            <div class="card-content">
              <div class="content">
              </div>
            </div>
          </div>
        </div>

        <div class="column is-4">
          <div class="card">
            <header class="card-header">
              <p class="card-header-title">Section de modification</p>
            </header>
            <div class="card-content">
              <div class="content">

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
  name: 'config',
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
.card {
  height: 400px;
}
</style>
