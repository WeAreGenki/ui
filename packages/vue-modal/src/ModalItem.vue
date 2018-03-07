<template>
  <div v-if="show" class="modal">
    <button v-if="closeBtn" @click="close" class="btn btn-clear float-r" type="button">
      <svg class="icon"><use xlink:href="~@wearegenki/icons/src/x.svg"/></svg>
    </button>

    <slot/>

    <button @click="close" class="btn btn-main" type="button">
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
