<template>
  <div class="app">
    <h1>{{msg}}</h1>

  <table>
        <tr>
          <th>Id</th>
          <th>Title</th>
        </tr>
        <tr v-for="post in posts" :key="post.id">
          <td>{{post.id}}</td>
          <td>{{post.title}}</td>

        </tr>
    </table>
    </div>
</template>
<script>
import axios from 'axios'
export default {
  data () {
    return {
      name: 'posts',
      msg: 'Liste Posts',
      posts: []
    }
  },
  mounted () {
    axios
      .get('https://jsonplaceholder.typicode.com/posts')
      .then((response) => { this.posts = response.data })
  }
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
