<template>
  <div class="app">
    <h1> Listes des posts </h1>
  <table>
        <tr>
          <th>Id</th>
          <th>Title</th>
          <th>Body</th>
        </tr>
        <tr v-for="post in posts" :key=post.id>
          <td >{{post.id}}</td>
          <td>{{post.title}}</td>
          <td>{{post.body}}</td>
        </tr>
    </table>
    </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
  name: 'posts',
  created () {
    this.$store.dispatch('showposts')
  },
  computed:
    mapState([
      'posts'
    ])
}
</script>
<style>
td{
border : 1px solid black;
}
table{
border-collapse: collapse;
}
</style>
