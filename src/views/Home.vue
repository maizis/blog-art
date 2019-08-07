<template>
<div>
    <div class="welcome">
      <h1 class="title is-1 has-text-left has-text-grey-dark">Welcome in this bulma Website</h1>
      <h1 class="title is-4 has-text-left has-text-grey-dark">This is a short description </h1>
      <a class="button is-pulled-left">About</a>
    </div>
    <div class="home2">
      <img id="img3" alt="Vue logo" src="../assets/image4.png">
    </div>
</div>
</template>
<script>
export default {
  computed: {
    isConnected () {
      return this.$store.getters.isConnected
    }
  }
}
</script>
<style>
#img {
  width:400px;
}
.home2 {
float:right;
width:600px;
height: 800px;
margin-top:60px;
margin-right:30px;

}
.welcome {
  float:left;
  width:500px;
  height: 300px;
  margin-left:12%;
  margin-top:150px;

}
</style>
