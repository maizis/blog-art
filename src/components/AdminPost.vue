<template>
  <div>
    <ModalForm>

      <template v-slot:add> Ajouter un article </template>

      <template v-slot:content>
        <div id="form">
          <div class="field">
            <div class="control">
              <br>
              <input class="input" type="text" name="title" v-model="title" id="title"  placeholder="Titre de l'article" required>
                <br>
                <br>
              <input class="input" type="text" name="subtitle" v-model="subtitle" id="subtitle"  placeholder="Sous-titre de l'article" required>
                <br>
                <br>
              <textarea class="textarea" type="text" name="bodyarticle" v-model="bodyarticle" id="bodyarticle"  placeholder="Contenu de l'article" rows="6" required> </textarea>
                <br>
                <br>
            </div>
          </div>
        </div>
      </template>
    </ModalForm>
      <br>
      <table class="table is-bordered  is-fullwidth">
      <thead class="user">
        <th>Id_Article </th>
        <th>Titre</th>
        <th>Sous-titre</th>
        <th>Contenu</th>
        <th> Date_Upload</th>
        <th> Like Count </th>
        <th>Delete Article</th>
      </thead>
      <tbody class="has-text-centered">
        <tr v-for="post in posts.slice(0,5)" :key=post.id>
          <th> {{ post.id }} </th>
          <td>  {{ post.title }} </td>
          <td> Ceci est un sous-titre </td>
          <td>  {{ post.body }} </td>
          <td> 23/20/2018</td>
          <td> 45 </td>
          <td><a class="button is-small"> X </a> </td>
        </tr>
        </tbody>
    </table>
  </div>
</template>

<script>
import ModalForm from '@/components/ModalForm.vue'

export default {
  components: {
    ModalForm
  },
  data () {
    return {
      title: '',
      subtitle: '',
      bodyarticle: '',
    }
  },
   mounted () {
    this.$store.dispatch('showPosts')
  },
  computed: {
    posts () {
      return this.$store.getters.posts
    }
  },
  methods: {
    show: function () {
      console.log(this.posts)
    }

  }
}
</script>

<style>
</style>
