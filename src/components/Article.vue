<template>
  <div> <div class="idArticle"> </div>
    <div class="section">
      <div class="columns is-centered">

        <div class="column is-8">
          <div class="card">
            <header>
              <div class="card-header-title">
                <p class="is-size-4"> Post.title {{ id }}  - Titre de l'article </p>
              </div>
            </header>
            <div class="card-content has-text-left">
              <div class="card-image">
                <figure class="image is-2by1">
                 <img src="https://picsum.photos/500/300" alt="Placeholder image">
                </figure>
              </div>
              <br>
             <h2 class="is-size-5"> Post.Body {{id}} </h2>
             <h3 class="is-size-10"> Sous-titre de l'article </h3>
             <br>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,
              totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit,
               sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
               Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit,
               sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat
               voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit
               laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit
               qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat
               <br>
               <h1 class="date content is-pulled-right"> Date de publication </h1>
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
                        <br>
                        {{comment.body}}
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
            <div class="suggestion">
              SUGGESTION D'ARTICLE
          </div>
          <div class="card" v-for="(post,index) in posts.slice(-3)" :key=post.id>
            <header class="card-header">
                <p class="card-header-title"> {{ post.title }} </p>
            </header>
             <div class="card-image">
                <figure class="image is-2by1">
                 <img src="https://picsum.photos/100/50" alt="Placeholder image">
                </figure>
              </div>
            <div class="card-content has-text-left">
              <div class="content"> {{ post.body }} </div>
              <div class="has-text-centered">
              <router-link :to="'/posts/' + index"> <a class="button is-small has-text-centered">Voir l'article </a> </router-link>
              </div>
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
      day: 'date du jour',
      delete: false
    }
  },
  mounted () {
    this.$store.dispatch('showPosts')
  },

  computed: {
    posts () {
      return this.$store.getters.posts
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

  methods: {
    addComment: function () {
      console.table(this.comments)
      this.comments.push({ pseudo: this.randomUser, body: this.commentaire })
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
  margin-top:10px
}

</style>
