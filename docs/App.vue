<template>
  <div id="app">
    <header class="top-nav">
      <nav class="nav container">
        <router-link to="/" class="nav-link logo">LOGO YO!</router-link>
        <router-link to="/typography" class="nav-link">Typography</router-link>
        <router-link to="/components" class="nav-link">Components</router-link>
      </nav>
    </header>

    <main>
      <router-view></router-view>
    </main>

    <footer class="copy">
      &copy; 2017 We Are Genki.
    </footer>
  </div>
</template>

<script>
// WAG framework
import '../src/css/main.postcss';

export default {
  name: 'app',
};
</script>

<style lang="postcss">
@import "../src/css/import.postcss";

/* #app {} */
</style>
