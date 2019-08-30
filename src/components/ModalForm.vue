<template>
  <div>
    <!-- Bouton Open Modal -->
    <slot name="open">
      <a
        class="button is-light is-small"
        @click="showModal"
      ><slot name="add" /></a>
    </slot>
    <!-- Modal Form -->
    <div
      v-if="isShow"
      class="modal is-active"
    >
      <div class="modal-background" />
      <div class="modal-card">
        <header class="modal-card-head">
          <p class="modal-card-title">
            <slot name="add" />
          </p>
          <button
            class="delete"
            aria-label="close"
            @click="hideModal"
          />
        </header>
        <section class="modal-card-body">
          <slot name="content" />
        </section>
        <!-- Button Submit -->
        <footer class="modal-card-foot">
          <button class="button is-small">
            <slot name="submit" />
          </button>
        </footer>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ModalForm',
  data () {
    return {
      isShow: false
    }
  },

  methods: {
    showModal: function () {
      this.isShow = true
    },
    hideModal: function () {
      this.isShow = false
    }
  }
}
</script>
