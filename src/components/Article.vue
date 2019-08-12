<template>
  <div> Article {{ $route.params.id }}
    <div class="section">
      <div class="">
        <div class="columns">

        <div class="column is-8">
          <div class="card">
            <header class="card-header">
              <p class="card-header-title"> Post.title {{id}} </p>
            </header>
            <div class="card-content has-text-left ">
              Post.Body {{id}}
            </div>
           </div>
            <br>

            <div class="field">
              <div class="control">
                <textarea class="textarea" v-model="commentaire" placeholder="Ajouter un commentaire"></textarea>
               <a class="button is-small is-pulled-right is-primary is-inverted" style="margin-top:5px" v-on:click="addComment">Commenter </a>
              </div>
            </div>
            <br>
            <br>
            <div class="contains card"  v-for=" comment in comments" :key=comment.id>
              <div class="card-content has-text-left">
                <strong>{{comment.pseudo}} </strong>: {{comment.body}}
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
      comments: [
        { pseudo: 'Henri', body: 'Quel magnifique article ! ' },
        { pseudo: 'Jean', body: 'Blablabla ' }
      ]
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
    }
  },

  methods: {
    addComment: function () {
      console.log(this.comments)
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
</style>
