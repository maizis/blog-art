<template>
  <div>

    <div class="tile is-ancestor">
  <div class="tile is-4 is-vertical is-parent">
    <div class="tile is-child box">
      <div class="title has-text-centered">  23.342 LIKES </div>
    </div>
    <div class="tile is-child box">
      <div class="title has-text-centered">  Nombre d'inscrit :  </div>
    </div>
  </div>
  <div class="tile is-parent">
    <div class="tile is-child box">
      <p class="title"> ARTICLES LES PLUS LIKÉS </p>
            <table class="table is-bordered  is-fullwidth">
      <thead class="user">
        <th>Id_Article </th>
        <th>Titre</th>
        <th>Sous-titre</th>
      </thead>
      <tbody class="has-text-centered">
        <tr v-for="post in posts.slice(0,4)" :key=post.id>
          <th> {{ post.id }} </th>
          <td>  {{ post.title }} </td>
          <td> Ceci est un sous-titre </td>
        </tr>
        </tbody>
    </table>
    </div>
  </div>
</div>

  </div>
</template>

<script>
export default {
  name: 'HomeAdmin',
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
  height: 550px;
}
</style>
