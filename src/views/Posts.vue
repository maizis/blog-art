<template>
<div class="app">
  <h1>{{msg}}</h1>

  <table>
        <tr>
          <th>Id</th>

        </tr>
        <tr v-for="(index, array) in arrays" :key="array">
          <td> {{array.id}} </td>

        </tr>
    </table>




</div>


</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      msg: 'Liste Posts',
      arrays: [ ],
    }
  },
mounted() {
    axios
    .get('https://jsonplaceholder.typicode.com/posts')
    .then(response => (this.arrays = response))
    .then(console.log(this.arrays))
  },

}
</script>


