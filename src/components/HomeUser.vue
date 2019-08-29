<template>
  <div class="home">
    <!-- Introduction -->
    <div class="container presentation">
      <p class="is-size-5 has-text-centered">Excepteur sint occaecat cupidatat</p>
      <br>
      <p class="is-size-7 has-text-justified">
        Animé par Frank Puaux et divers collaborateurs, le blog du Collectionneur Moderne décortique
        les rouages de la scène artistique contemporaine : guides pratiques, marché de l’art,
        expositions, interviews, etc. Des sujets de fond ou des actualités qui retiennent
        notre attention et prêtent à réfléchir.. Le blog du Collectionneur Moderne décortique
        les rouages de la scène artistique contemporaine
      </p>
    </div>
    <!-- 2 articles -->
    <br>
    <p class="is-size-7" style="margin:10px"> ARTICLE DE LA SEMAINE </p>
    <div class="tile is-ancestor">
      <div class="tile is-parent">

        <div class="tile" >
          <div class="homeCard card" v-for="(post,index) in posts.slice(-2)" :key=post.id style="margin-right:10px">
            <router-link :to="'/posts/' + index" >  </router-link>
            <div class="card-image">
              <figure class="image is-2by1">
              <img src="http://lorempixel.com/640/360">
              </figure>
            </div>
            <div class="card-content">
              <div class="media">
                <div class="media-content">
                  <p class="title is-6"> {{post.title}} </p>
                  <p class="subtitle is-7"> Une histoire d'art </p>
                </div>
              </div>
              <div class="extrait content">
                {{post.body}}
                <br>
              </div>
              <time class="is-pulled-right is-size-7" datetime="2016-1-1"> 01 Janvier 2016</time>
              <div v-if="!isConnected">
                <ModalForm>
                  <template v-slot:add> Lire l'article </template>
                  <template v-slot:content>
                    <p class="is-size-5 has-text-centered"> Ce contenu est reservé au personnes inscrites et connectées.  </p>
                    <p class="is-size-6 has-text-centered"> Connectez-vous pour lire l'article ! </p>
                  </template>
                  <template v-slot:submit>
                    <router-link :to="'/login'"> Connectez-vous </router-link>
                  </template>
                </ModalForm>
              </div>
              <div v-else>
                <router-link :to="'/posts/' + index">
                <a href="" class="button is-small"> Lire l'article </a>
                </router-link>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
    <!-- Paragraphe Lorem Ipsum -->
    <br>
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
    <!-- Image + Paragraphe Lorem Ipsum -->
    <br>
    <div class="img_home"> </div>
    <br>
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
    <br>
  </div>
</template>

<script>
import ModalForm from '@/components/ModalForm.vue'

export default {
  components: {
    ModalForm
  },
  name: 'HomeUser',
  data () {
    return {
      mail: ''
    }
  },

  mounted () {
    this.$store.dispatch('showPosts')
  },

  computed: {
    isConnected () {
      return this.$store.getters.isConnected
    },
    posts () {
      return this.$store.getters.posts
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
.extrait {
  text-overflow: ellipsis;
  overflow: hidden;
}
.homeCard {
  width: 600px;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
}

</style>
