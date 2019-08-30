<template>
  <div>
    <!-- Listes des articles -->
    <div class="tile is-ancestor">
      <div class="tile is-parent">
        <div class="tile is-child tablecontent">
          <p> Most views articles </p>
          <br>
          <table class="table is-fullwidth table is-striped">
            <thead class="user">
              <th>Id </th>
              <th>Titre</th>
              <th>Sous-titre</th>
              <th>Likes</th>
            </thead>
            <tbody class="has-text-centered">
              <tr
                v-for="post in posts.slice(0,10)"
                :key="post.id"
              >
                <th> {{ post.id }} </th>
                <td style="max-width:200px">
                  {{ post.title }}
                </td>
                <td style="max-width:200px">
                  {{ post.body }}
                </td>
                <td> {{ post.like }} </td>
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
  name: 'AdminHome',
  computed: {
    posts () {
      return this.$store.getters.posts
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
#heart, #user {
  width: 100px;
}
td {
  overflow:hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.tablecontent {
  background-color:white;
  max-height:350px;
  overflow:scroll;
  border-style: solid;
  border-width: 15px;
  border-color:white;
}
</style>
