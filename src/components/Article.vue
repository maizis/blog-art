<template>
  <div
    class="has-text-weight-light"
    style="margin-top:30px"
  >
    <div class="has-text-left">
      <router-link to="/posts">
        Retour
      </router-link>
    </div>

    <br>
    <div class="columns">
      <div class="column is-8">
        <!-- Article avec titre - Subtitle - Content - Date-upload -->
        <div>
          <!-- Titre -->
          <header>
            <div class="header-title">
              <p class="is-size-5 has-text-weight-light">
                {{ post.title }}
              </p>
            </div>
          </header>
          <br>
          <div class="has-text-justified">
            <!-- Image -->
            <div class="card-image">
              <figure class="image is-2by1">
                <img
                  src="https://picsum.photos/500/300"
                  alt="Placeholder image"
                >
              </figure>
            </div>
            <br>
            <!-- Subtitle -->
            <h3 class="is-size-9">
              {{ post.subtitle }}
            </h3>
            <br>
            <!-- Body -->
            <p>{{ post.body }}</p>
            <br>
            <!-- Like button -->
            <div class="is-size-5">
              <div class="is-pulled-left">
                <div>
                  <img
                    v-if="!liked"
                    src="../assets/img/heartwhite.png"
                    width="30px"
                    @click="like"
                  >
                  <img
                    v-else
                    src="../assets/img/heart.png"
                    width="30px"
                    @click="dislike"
                  >
                </div>
              </div>
            </div>
            <!-- Date-upload -->
            <h1 class="date content is-pulled-right">
              {{ post.date_upload }}
            </h1>
            <br>
          </div>
        </div>
        <br>

        <!-- Comment form -->
        <div class="field">
          <div class="control">
            <textarea
              v-model="commentaire"
              class="textarea"
              placeholder="Ajouter un commentaire"
            />
            <a
              class="button is-small is-pulled-right is-primary is-inverted"
              style="margin-top:5px"
              @click="addComment"
            >Commenter </a>
          </div>
        </div>
        <br>
        <br>

        <!-- Comment list -->
        <div
          v-for=" comment in comments"
          :key="comment.id"
          class="commentaire contains card"
        >
          <div class="card-content has-text-left">
            <article class="media">
              <figure class="media-left">
                <p class="image is-64x64">
                  <img src="https://picsum.photos/id/239/50/50">
                </p>
              </figure>
              <div class="media-content">
                <div class="content">
                  <p>
                    <strong> {{ comment.pseudo }} </strong>
                    <br> {{ comment.body }}
                  </p>
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>

      <div class="column is-4">
        <!-- Last articles list -->
        <div>
          <header>
            <div class="card-header-title">
              <p class="is-size-5">
                DERNIERS ARTICLES
              </p>
            </div>
          </header>
          <div class="card-content">
            <div>
              <ul>
                <li
                  v-for="element in posts"
                  :key="element.id"
                >
                  <router-link :to="'/posts/' + element.id">
                    {{ element.title }}
                  </router-link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Article',
  data () {
    return {
      id: this.$route.params.id,
      commentaire: '',
      comments: [],
      delete: false,
      liked: false
    };
  },

  computed: {
    post () {
      return this.$store.getters.post;
    },
    posts () {
      return this.$store.getters.posts;
    },
    randomUser () {
      return this.$store.getters.randomUser;
    },
    isLiked () {
      return this.$store.getters.isLiked;
    }
  },

  watch: {
    '$route': function route () {
      this.$store.dispatch('showPost', { id: this.$route.params.id });
      //console.log(window.location.href)
    }
  },

  mounted () {
    this.$store.dispatch('showPost', { id: this.$route.params.id });
    this.$store.dispatch('showPosts');
  },

  methods: {
    addComment: function () {
      this.comments.push({ pseudo: this.randomUser, body: this.commentaire });
      this.commentaire = '';
    },
    like: function () {
      this.liked = true;
    },
    dislike: function () {
      this.liked = false;
    }
  }
};
</script>

<style lang="scss" scoped>
ul {
  list-style: inside disc;
}
.date {
  font-size:12px;
  margin:10px;
}
.like {
  float:right
}
</style>
