<template>
  <div>

    <!-- ModalForm : Button add article + Modal content -->
    <ModalForm>
      <template v-slot:add>
        Ajouter un article
      </template>
      <template v-slot:content>
        <div id="form">
          <div class="field">
            <div class="control">
              <br>
              <input
                id="title"
                v-model="title"
                class="input"
                type="text"
                name="title"
                placeholder="Titre de l'article"
                required
              >
              <br>
              <br>
              <input
                id="subtitle"
                v-model="subtitle"
                class="input"
                type="text"
                name="subtitle"
                placeholder="Sous-titre de l'article"
                required
              >
              <br>
              <br>
              <textarea
                id="bodyarticle"
                v-model="bodyarticle"
                class="textarea"
                type="text"
                name="bodyarticle"
                placeholder="Contenu de l'article"
                rows="6"
                required
              />
              <br>
              <div class="file">
                <label class="file-label">
                  <input
                    class="file-input"
                    type="file"
                    name="resume"
                  >
                  <span class="file-cta">
                    <span class="file-icon">
                      <img
                        src="https://img.icons8.com/material-rounded/24/000000/download.png"
                      >
                    </span>
                    <span class="file-label">
                      Download image file
                    </span>
                  </span>
                </label>
              </div>

            </div>
          </div>
        </div>
      </template>
      <template v-slot:submit>
        Ajouter
      </template>
    </ModalForm>

    <!-- Listes des articles -->
    <br>
    <table class="table is-fullwidth table is-striped">
      <thead class="user">
        <th> Id </th>
        <th> Titre</th>
        <th> Sous-titre</th>
        <th> Delete</th>
      </thead>
      <tbody>
        <tr
          v-for="post in posts.slice(0,10)"
          :key="post.id"
        >
          <th> {{ post.id }} </th>
          <td style="max-width:200px">
            {{ post.title }}
          </td>
          <td style="max-width:200px">
            {{ post.body }}
          </td>
          <td> X </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import ModalForm from '@/components/ModalForm.vue';

export default {
  components: {
    ModalForm
  },
  data () {
    return {
      title: '',
      subtitle: '',
      bodyarticle: ''
    };
  },
  computed: {
    posts () {
      return this.$store.getters.posts;
    },
    lastPosts () {
      return this.posts.slice(0);
    }
  },
  mounted () {
    this.$store.dispatch('showPosts');
  },
};
</script>

<style>
td {
  overflow:hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
</style>
