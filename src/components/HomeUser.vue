<template>
  <div class="home">

    <!-- Introduction Lorem Ipsum -->
    <div class="container presentation">
      <p class="is-size-5 has-text-centered">
        Excepteur sint occaecat cupidatat
      </p>
      <br>
      <p class="is-size-7 has-text-centered">
        Animé par Frank Puaux et divers collaborateurs, le blog du Collectionneur Moderne décortique
        les rouages de la scène artistique contemporaine : guides pratiques, marché de l’art,
        expositions, interviews, etc. Des sujets de fond ou des actualités qui retiennent
        notre attention et prêtent à réfléchir.. Le blog du Collectionneur Moderne décortique
        les rouages de la scène artistique contemporaine
      </p>
    </div>

    <!--  2 articles -->
    <br>
    <p
      class="is-size-7"
      style="margin:10px"
    >
      ARTICLE DE LA SEMAINE
    </p>

    <div class="tile is-ancestor">
      <div class="tile is-parent">

        <div
          class="tile is-child"
          v-for="post in posts.slice(2)"
          :key="post.id"
          style="margin:10px"
        >
          <div
            class="extrait has-background-white-bis"
            style="margin:10px; padding:10px"
          >
            <figure class="image is-2by1">
              <img src="https://picsum.photos/id/193/640/360">
            </figure>
            <br>
            <p class="is-size-6">
              {{post.title}}
            </p>
            <div
              class="extrait"
              style="margin-top:10px"
            >
              <p class="is-size-7 article-body has-text-weight-light">
                {{ post.subtitle }}
              </p>
            </div>
            <br>

            <!-- Button read - ModalForm -->
            <div v-if="!isConnected">
              <ModalForm>
                <template v-slot:add>
                  Lire l'article
                </template>
                <template v-slot:content>
                  <p class="is-size-5 has-text-centered">
                    Ce contenu est reservé au personnes inscrites et connectées.
                  </p>
                  <p class="is-size-6 has-text-centered">
                    Connectez-vous pour lire l'article !
                  </p>
                </template>
                <template v-slot:submit>
                  <router-link :to="'/login'">
                    Connectez-vous
                  </router-link>
                </template>
              </ModalForm>
            </div>

            <div v-else>
              <router-link :to="'/posts/' + post.id">
                <a class="button is-small is-light">
                  Lire l'article </a>
              </router-link>
            </div>

          </div>
        </div>
      </div>
    </div>

    <!-- Paragraphe Lorem Ipsum -->
    <br>
    <div class="container presentation">
      <p class="is-size-5 has-text-centered">
        Excepteur sint occaecat cupidatat
      </p>
      <br>
      <p class="is-size-7 has-text-centered">
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
        labore et dolore magna aliqua. Ut enim ad minim veniam,
        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur
      </p>
    </div>
    <!-- Image + Paragraphe Lorem Ipsum -->
    <br>
    <div class="img-home" />
    <br>
    <div class="container presentation">
      <p class="is-size-5 has-text-centered">
        Excepteur sint occaecat cupidatat
      </p>
      <br>
      <p class="is-size-7 has-text-centered">
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
        labore et dolore magna aliqua. Ut enim ad minim veniam,
        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur
      </p>
    </div>
    <br>
    <br>
    <!-- Tiles with 3 images LoremPicsum -->
    <div
      class="tile is-ancestor"
      style="padding:10px"
    >
      <div class="tile is-4 is-vertical is-parent">
        <div class="tile is-child">
          <img src="https://picsum.photos/id/91/2000/1025"/>
        </div>
        <div class="tile is-child">
          <img src="https://picsum.photos/id/939/2000/1025"/>
        </div>
      </div>
      <div class="tile is-parent">

        <div
          class="tl-contain tile is-child"
          style="text-align:center"
        >
          <img
            class="img"
            src="https://picsum.photos/id/172/2000/1100"
          >
          <h2 class="expo is-size-3 has-text-white">
          EXPOSITION </h2>
          <p class="d-expo is-size-7 has-text-white">
          "A new way to see art"</p>
          <p class="date-expo is-size-7 has-text-white">
          - 2 3  /  1 2  / 1 9 - </p>
          <div class="buy-ticket">
            <a class="button">
            Buy Tickets
            </a>
          </div>
        </div>

      </div>
    </div>
     <!-- Paragraphe Lorem Ipsum -->
    <br>
    <div class="container presentation">
      <p class="is-size-5 has-text-centered">
        Excepteur sint occaecat cupidatat
      </p>
      <p class="is-size-3 has-text-centered has-text-grey-light">
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      </p>
       <br>
      <p class="is-size-7 has-text-centered">
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
        labore et dolore magna aliqua. Ut enim ad minim veniam,
        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur
      </p>
    </div>
    <br>
    <br>
  </div>
</template>

<script>
import ModalForm from '@/components/ModalForm.vue';

export default {
  name: 'HomeUser',
  components: {
    ModalForm
  },
  data () {
    return {
      mail: ''
    };
  },

  computed: {
    isConnected () {
      return this.$store.getters.isConnected;
    },
    posts () {
      return this.$store.getters.posts;
    }
  },

  mounted () {
    this.$store.dispatch('showPosts');
  }
};
</script>

<style>
.home {
  margin-top:50px
}
.img-home {
  background-image: url("../assets/img/img_home.jpeg");
  background-position: center;
  height:200px;
}
.presentation {
  width:600px;
}
.tl-contain {
  position:relative;
  width:100%
}

.expo, .date-expo, .d-expo, .buy-ticket {
    position: absolute;
    width: 100%;
}
.expo {
  top: 30%;
  width: 100%;
}
.date-expo {
  top: 40%;
}
.buy-ticket {
  top: 70%;
}
.buy-ticket :hover {
  background-color:#EDEDED
}
.d-expo {
  top: 10%;
}
</style>
