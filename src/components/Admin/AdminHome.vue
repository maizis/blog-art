<template>
  <div class="admin-home">
    <!-- Listes des articles -->
    <div class="tile is-ancestor">
      <div class="tile is-parent">
        <div class="tile is-child">
          <p> Most views articles </p>
          <br>
          <table class="table is-fullwidth table is-striped">
            <thead class="table-user">
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
      return this.$store.getters.posts;
    }
  }
};
</script>

<style lang="scss" scoped>
td {
  overflow:hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.admin-home {
  margin-top:50px
}
</style>
