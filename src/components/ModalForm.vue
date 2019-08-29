<template>
  <div>

    <slot name="open">
      <a class="button is-light is-small" v-on:click="showModal"><slot name="add"> </slot></a>
    </slot>

    <div class="modal is-active" v-if="isShow">
      <div class="modal-background"></div>
      <div class="modal-card">
        <header class="modal-card-head">
          <p class="modal-card-title"> <slot name="add"> </slot></p>
          <button class="delete" aria-label="close"  v-on:click="hideModal"></button>
        </header>
        <section class="modal-card-body">
          <slot name="content"></slot>
        </section>
        <footer class="modal-card-foot">
          <button class="button is-small"> <slot name="submit"> </slot> </button>
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
