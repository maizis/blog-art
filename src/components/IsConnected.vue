<template>
<div class="isconnected">
<h1> Vous êtes maintenant connecté {{correctusername}} </h1>
</div>
</template>
<script>
export default {
  name: 'HomeForm',
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
