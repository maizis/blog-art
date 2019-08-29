<template>
  <div class="has-text-weight-light" style="margin-top:30px">
    <div class="idArticle has-text-left">
      <router-link to="/posts"> Retour  </router-link>
    </div>

    <div class="columns">
      <div class="column is-8">
        <!--<pre>{{ post }}</pre>-->
        <div>
          <header>
            <div class="header-title">
              <p class="is-size-5 has-text-weight-light"> {{ post.title }}  </p>
            </div>
          </header>
          <br>
          <div class="has-text-justified">
            <div class="card-image">
              <figure class="image is-2by1">
                <img src="https://picsum.photos/500/300" alt="Placeholder image">
              </figure>
            </div>
            <br>
            <div class="is-size-5">
              <div class="is-pulled-right">
                <div>
                  <img src="../assets/heartwhite.png" width="30px" v-on:click="like" v-if="!liked">
                  <img src="../assets/heart.png" width="30px" v-on:click="dislike" v-else>
                </div>
              </div>
            </div>
            <h3 class="is-size-9"> {{ post.subtitle }} </h3>
            <br>
            <p>{{ post.body }}</p>
            <h1 class="date content is-pulled-right"> {{ post.date_upload }}</h1>
            <br>
          </div>
        </div> <br>
        <div class="field">
            <div class="control">
              <textarea class="textarea" v-model="commentaire" placeholder="Ajouter un commentaire"></textarea>
              <a class="button is-small is-pulled-right is-primary is-inverted" style="margin-top:5px" v-on:click="addComment">Commenter </a>
            </div>
        </div>
        <br>
        <br>
        <div class="commentaire contains card" v-for=" comment in comments" :key=comment.id>
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
                    <strong> {{comment.pseudo}} </strong>
                    <br> {{comment.body}}
                  </p>
                  <small> <a>Like</a> - <a>Reply</a> </small>
                  <small class="like"> 0 Like </small>
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>

      <div class="column is-4">
        <div>
          <header>
            <div class="card-header-title">
              <p class="is-size-5"> DERNIERS ARTICLES </p>
            </div>
          </header>
            <div class="card-content">
              <div>
                <ul>
                  <!--<li v-for="post in posts.slice(0,10)" :key=post.id>
                     {{ post.title }}
                  </li>-->
                </ul>
              </div>
            </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Article',
  data () {
    return {
      // post: {},
      id: this.$route.params.id,
      commentaire: '',
      delete: false,
      liked: false
    }
  },

  // getters: {
  //   post: state => state.post
  //   },

  mounted () {
    // this.$store.dispatch('showPost', { id: this.$route.params.id }).then((post) => {
    //   this.post = post
    // })
    this.$store.dispatch('showPost', { id: this.$route.params.id })
  },

  computed: {
    post () {
      return this.$store.getters.post
    },
    randomUser () {
      return this.$store.getters.randomUser
    },
    comments () {
      return this.$store.getters.comments
    },
    isLiked () {
      return this.$store.getters.isLiked
    }
  },

  watch: {
    '$route': function route () {
      console.log(window.location.href)
      this.$store.dispatch('showPost', { id: this.$route.params.id })
    }
  },

  methods: {
    addComment: function () {
      this.comments.push({ pseudo: this.randomUser, body: this.commentaire })
      this.commentaire = ''
    },
    like: function () {
      this.liked = true
    },
    dislike: function () {
      this.liked = false
    }
  }
}
</script>

<style lang="scss" scoped>
.card {
  &:not(:last-child) {
    margin-bottom: 1rem;
  }
}
li {
  text-align: left;
  overflow:hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
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
.card-content {
  padding:12px;
  border:none;
}
.suggestion {
  margin-bottom:20px;
  background-color: #fff;
  padding:10px
}
.idArticle {
  margin-bottom:20px;
}

</style>
