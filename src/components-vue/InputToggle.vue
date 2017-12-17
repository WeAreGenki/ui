<template>
<span @click="toggle" class="input-toggle">
  <svg v-if="value" class="icon"><use xlink:href="~@/assets/icons/check-square.svg"/></svg>
  <svg v-else class="icon"><use xlink:href="~@/assets/icons/square.svg"/></svg>

  <svg v-if="value" class="icon"><use xlink:href="~@/assets/icons/toggle-left.svg"/></svg>
  <svg v-else class="icon"><use xlink:href="~@/assets/icons/toggle-right.svg"/></svg>
</span>
</template>

<script>
export default {
  name: 'InputToggle',
  props: {
    value: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    toggle() {
      this.$emit('input', !this.value);
    },
  },
};
</script>

<style>
/* @import "css/import"; */

/* .input-toggle {} */
</style>
