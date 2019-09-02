<template>
  <div class="home">
    <!-- Introduction Lorem Ipsum -->
    <div class="container presentation">
      <p class="is-size-5 has-text-centered">
        Excepteur sint occaecat cupidatat
      </p>
      <br>
      <p class="is-size-7 has-text-justified">
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
        <div class="tile">
          <div
            v-for="post in posts.slice(2)"
            :key="post.id"
            class="home-card card"
            style="margin-right:10px"
          >
            <div class="card-image">
              <figure class="image is-2by1">
                <img src="https://picsum.photos/id/193/640/360">
              </figure>
            </div>
            <div class="card-content">
              <div class="media">
                <div class="media-content">
                  <p class="title is-6">
                    {{ post.title }}
                  </p>
                  <p class="subtitle is-7">
                    Une histoire d'art
                  </p>
                </div>
              </div>
              <div class="extrait content">
                {{ post.body }}
                <br>
              </div>
              <time
                class="is-pulled-right is-size-7"
                datetime="2016-1-1"
              > {{ post.date_upload }}</time>
              <div v-if="!isConnected">
                <!-- Button read - ModalForm -->
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
                  <a
                    href=""
                    class="button is-small"
                  > Lire l'article </a>
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
      <p class="is-size-5 has-text-centered">
        Excepteur sint occaecat cupidatat
      </p>
      <br>
      <p class="is-size-7 has-text-justified">
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
      <p class="is-size-7 has-text-justified">
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
.extrait {
  text-overflow: ellipsis;
  overflow: hidden;
}
.home-card {
  width: 600px;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
}

</style>
