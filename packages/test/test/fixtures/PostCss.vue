<!-- https://github.com/vuejs/vue-jest/blob/master/test/resources/PostCss.vue -->

<template>
  <div class="testPcss"/>
</template>

<style lang="postcss">
  @import "./styles/transitions";

  /* stylelint-disable color-named */
  .testPcss {
    background-color: purple;
  }
</style>

<style lang="pcss">
  /* This syntax is for postcss-custom-properties */
  --primary-color: green;
  /* This syntax is for postcss-nesting, but invalid as Pure CSS */
  body {
    @media screen {
      background-color: grey;
    }
  }
</style>
