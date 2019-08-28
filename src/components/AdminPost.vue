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
      <template v-slot:submit> <a v-on:click="test"> Ajouter </a></template>
    </ModalForm>
      <br>
      <table class="table is-fullwidth table is-striped">
        <thead class="user">
          <th>Id </th>
          <th>Titre</th>
          <th>Sous-titre</th>
          <th>Delete</th>
        </thead>
        <tbody>
          <tr v-for="post in posts.slice(0,10)" :key=post.id>
            <th> {{ post.id }} </th>
            <td style="max-width:200px">  {{ post.title }} </td>
            <td style="max-width:200px">{{ post.body }} </td>
            <td > X </td>
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
      bodyarticle: ''
    }
  },
  mounted () {
    this.$store.dispatch('showPosts')
  },
  computed: {
    posts () {
      return this.$store.getters.posts
    },
    lastPosts () {
      return this.posts.slice(0)
    }
  },
  methods: {
    show: function () {
      console.log(this.posts)
    },

  }
}
</script>

<style>
td {
  overflow:hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.tablecontent {
  background-color:white;
  max-height:350px;
  overflow:scroll;
  border-style: solid;
  border-width: 15px;
  border-color:white;
}
</style>
