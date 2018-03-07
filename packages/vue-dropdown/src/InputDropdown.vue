<template>
  <span class="dropdown">
    <button class="btn btn-clear ml-auto" title="Org options" type="button">
      <svg class="icon-small"><use :xlink:href="`~@wearegenki/icons/src/${ icon }.svg`"/></svg>
    </button>
  </span>
</template>

<script>
export default {
  name: 'InputDropdown',
  props: {
    icon: {
      type: String,
      default: 'more-vertical',
    },
  },
  // data: () => ({}),
};
</script>

<style lang="postcss">
/* @import "@wearegenki/ui/import"; */

/* #dropdown {} */
</style>
