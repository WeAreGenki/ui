<!-- TODO: Turn this into a functional component if possible for better performance -->
<!-- <template functional> -->
<template>
<div v-if="show" class="modal">
  <button v-if="closeBtn" @click="close" class="btn btn-clear float-r">
    <svg class="icon"><use xlink:href="~@/assets/icons/x.svg"/></svg>
  </button>

  <slot></slot>

  <button @click="close" class="btn btn-main">{{ action }}</button>
</div>
</template>

<script>
export default {
  name: 'Modal',
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
  data() {
    return {
      show: false,
    };
  },
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

<style>
/* @import "css/import"; */

/* .modal {} */
</style>
