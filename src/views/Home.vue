<template>
  <div>

    <div class="welcome">
        <h1 class="title is-1 has-text-left has-text-grey-dark">Welcome in this bulma Website</h1>
        <h1 class="title is-4 has-text-left has-text-grey-dark">This is a short description </h1>
        <div class="control">
          <input class="input" id="mail" type="text" v-model="mail" placeholder="example@mail.com">
          <button class="button is-primary" v-on:click="newletter" >Newletter</button>
        </div>
          <br>
          <h1 class="has-text-left" v-if="mailSend"> Vous êtes bien inscrit à la newletter ! </h1>
    </div>

    <div class="home">
      <img alt="Vue logo" id="img" src="../assets/imgAstro.png">
    </div>

    <div class="container about is-fluid">
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      mail: '',
      mailSend: false
    }
  },

  computed: {
    isConnected () {
      return this.$store.getters.isConnected
    }
  },

  methods: {
    newletter: function () {
      this.mailSend = true
      this.mail = ''
    }
  }
}
</script>

<style>
.home {
  float:right;
  width:500px;
  height: 500px;
  margin-top:60px;
  margin-right:100px;

}
.welcome {
  float:left;
  width:500px;
  height: 400px;
  margin-top:160px;
  margin-left:15%;
}
#mail {
  width:300px;
  margin-right:10px;
}
.about {
  top:600px;
  width:800px;
  height:150px;
  margin:20px;
  background-color: #fff;
}

</style>
