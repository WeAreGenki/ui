<template>
<span class="dropdown">
  <button class="btn btn-clear ml-auto" title="Org options">
    <svg class="icon-small"><use :xlink:href="`~@/assets/icons/${ icon }.svg`"/></svg>
  </button>
</span>
</template>

<script>
export default {
  name: 'dropdown',
  props: {
    icon: {
      type: String,
      default: 'more-vertical',
    },
  },
  // data() {
  //   return {};
  // },
};
</script>

<style>
/* @import "css/import"; */

/* #dropdown {} */
</style>
