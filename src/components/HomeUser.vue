<template>
<div class="home">
        <div class="container presentation">
          <p class="is-size-5 has-text-centered">Excepteur sint occaecat cupidatat</p>
          <br>
          <p class="is-size-7 has-text-justified">
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua. Ut enim ad minim veniam,
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
            commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
            velit esse cillum dolore eu fugiat nulla pariatur</p>
        </div>
        <br>
        <p class="is-size-7" style="margin:10px"> ARTICLE DE LA SEMAINE </p>
        <div class="tile is-ancestor">
          <div class="tile is-parent">
            <div class="tile" style="margin-right:30px">
              <div class="card">
                <div class="card-image">
                  <figure class="image is-2by1">
                    <img src="http://lorempixel.com/640/360">
                  </figure>
                </div>
                <div class="card-content">
                  <div class="media">
                    <div class="media-content">
                      <p class="title is-6">L'art contemporain en Allemagne </p>
                      <p class="subtitle is-7"> Une histoire d'art </p>
                    </div>
                  </div>
                  <div class="content">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Phasellus nec iaculis mauris [...]
                    <br>
                    <time class="is-pulled-right is-size-7" datetime="2016-1-1"> 01 Janvier 2016</time>
                    <br>
                  </div>
                </div>
              </div>
            </div>
              <div class="tile" style="margin-right:10px">
                <div class="card">
                  <div class="card-image">
                      <figure class="image is-2by1">
                      <img src="http://lorempixel.com/640/360">
                      </figure>
                  </div>
                <div class="card-content">
                  <div class="media">
                    <div class="media-content">
                      <p class="title is-6">L'art contemporain en Allemagne </p>
                      <p class="subtitle is-7"> Une histoire d'art </p>
                    </div>
                  </div>
                  <div class="content">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Phasellus nec iaculis mauris [...]
                    <br>
                    <time class="is-pulled-right is-size-7" datetime="2016-1-1"> 01 Janvier 2016</time>
                    <br>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="container presentation">
          <p class="is-size-5 has-text-centered">Excepteur sint occaecat cupidatat</p>
          <br>
          <p class="is-size-7 has-text-justified">
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua. Ut enim ad minim veniam,
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
            commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
            velit esse cillum dolore eu fugiat nulla pariatur</p>
            </div>
            <br>
            <div class="img_home"> </div>
            <div class="container presentation">
          <p class="is-size-5 has-text-centered">Excepteur sint occaecat cupidatat</p>
          <br>
          <p class="is-size-7 has-text-justified">
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua. Ut enim ad minim veniam,
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
            commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
            velit esse cillum dolore eu fugiat nulla pariatur</p>
        </div>

      </div>
</template>

<script>
export default {
  name: 'HomeUser',
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
.img_home {
  background-image: url("../assets/img_home.jpeg");
  background-position: center;
  height:200px;
}
.presentation {
  width:600px;
}
.home {
  margin-top:20px
}

</style>
