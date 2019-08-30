<template>
  <div>
    <!-- ModalForm : Button add user + Modal content -->
    <ModalForm>
      <template v-slot:add>
        Ajouter un utilisateur
      </template>
      <template v-slot:content>
        <div id="form">
          <div class="field">
            <div class="control">
              <br>
              <input
                id="username"
                v-model="username"
                class="input"
                type="text"
                name="username"
                placeholder="Pseudo"
                required
              >
              <br>
              <br>
              <input
                id="mail"
                v-model="mail"
                class="input"
                type="email"
                name="Email"
                placeholder="E-mail"
                required
              >
              <br>
              <br>
              <input
                id="password"
                v-model="password"
                class="input"
                type="password"
                name="password"
                placeholder="Password"
                required
              >
              <br>
              <br>
            </div>
          </div>
        </div>
      </template>
      <template v-slot:submit>
        Ajouter
      </template>
    </ModalForm>

    <!-- Liste des users, fake liste -->
    <br>
    <table class="table is-fullwidth table is-striped">
      <thead class="user">
        <th> Id_user </th>
        <th> Pseudo</th>
        <th> E-mail</th>
        <th> Date_Signup</th>
        <th> Like Count </th>
        <th> Delete User</th>
      </thead>
      <tbody class="has-text-centered">
        <tr>
          <th> 38820291 </th>
          <td> Antoine </td>
          <td> antoinelenormand@gmail.com</td>
          <td> 23/20/2018</td>
          <td> 45 </td>
          <td> <a class="button is-small"> X </a> </td>
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
      username: '',
      mail: '',
      password: ''
    }
  }
}
</script>

<style>
</style>
