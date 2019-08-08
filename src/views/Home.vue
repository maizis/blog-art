<template>
<div>
    <div class="welcome">
      <h1 class="title is-1 has-text-left has-text-grey-dark">Welcome in this bulma Website</h1>
      <h1 class="title is-4 has-text-left has-text-grey-dark">This is a short description </h1>
      <div class="control">
        <input class="input" id="mail" type="text" v-model="mail" placeholder="example@mail.com">
          <button class="button is-primary" v-on:click="newletter" >Newletter</button>
      </div>
      <br> <h1 class="has-text-left" v-if="mailsend"> Vous êtes bien inscrit à la newletter ! </h1>
    </div>
    <div class="home2">
      <img id="img3" alt="Vue logo" src="../assets/image4.png">
    </div>
</div>
</template>
<script>
export default {
  data () {
    return {
      mail: '',
      mailsend: false
    }
  },
  computed: {
    isConnected () {
      return this.$store.getters.isConnected
    }
  },
  methods: {
    newletter: function () {
      this.mailsend = true
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
width:500px;
height: 400px;
margin-top:60px;
margin-right:100px;
}
.welcome {
  float:left;
  width:500px;
  height: 300px;
  margin-left:20%;
  margin-top:150px;
}
#mail {
width:300px;
margin-right:20px;
}
</style>
