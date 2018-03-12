<!-- https://github.com/vuejs/vue-jest/blob/master/test/resources/Css.vue -->

<template>
  <div :class="[css.testA, $style.testB]"/>
</template>

<script>
export default {
  name: 'Button',
};
</script>

<style module="css">
  /* stylelint-disable color-named */
  .testA {
    background-color: red;
  }
</style>
<style module>
  .testB {
    background-color: blue;
  }
</style>
<style>
  .testC {
    background-color: blue;
  }
</style>
