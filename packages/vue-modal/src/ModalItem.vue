<template>
  <div v-if="show" class="modal">
    <button
      v-if="closeBtn"
      class="btn btn-clear float-r"
      type="button"
      @click="close"
    >
      <svg class="icon"><use xlink:href="~@wearegenki/icons/src/x.svg"/></svg>
    </button>

    <slot/>

    <button
      class="btn btn-main"
      type="button"
      @click="close"
    >
      {{ action }}
    </button>
  </div>
</template>

<script>
export default {
  name: 'ModalItem',
  props: {
    closeBtn: {
      type: Boolean,
      default: true,
    },
    action: {
      type: [String, Boolean],
      default: 'Close',
    },
    callback: {
      type: Function,
      default: undefined,
    },
  },
  data: () => ({
    show: false,
  }),
  methods: {
    open() {
      this.show = true;
    },
    close() {
      this.show = false;
      if (this.callback) this.callback();
    },
  },
};
</script>

<style lang="postcss">
/* @import "@wearegenki/ui/import"; */

/* .modal {} */
</style>
