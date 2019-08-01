<template>
<div class="welcome">
  <h1> Welcome {{correctusername}}</h1>
</div>
</template>
<script>
import { mapState } from 'vuex'
export default {
  name: 'welcome',
  data () {
    return {
      correctusername: 'sarah',
      correctpassword: 'adagio',

    }
  }

  }
</script>
<style scoped lang="scss">
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
label {
  color: #42b983;
}
</style>
