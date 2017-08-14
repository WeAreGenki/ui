<!-- TODO: Consider a static 404 page instead! -->

<template>
  <div class="error404 container text-center">
    <!-- TODO -->
    <h1 class="display1">404 Error</h1>
    <p class="lead">Sorry, can't find what you're looking for.</p>
    <router-link to="/" class="btn">Go to dashboard</router-link>
  </div>
</template>

<script>
export default {
  name: 'error404',
};
</script>

<style lang="postcss">
/* .error404 {} */
</style>
