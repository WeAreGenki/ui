<!-- TODO: @Testing: will the app even load before this component is ever rendered on unsupported browsers? Maybe this should be an independent thing? -->

<!-- FIXME: Small screen responsive buttons -->

<!-- TODO: Turn this into a functional component if possible for better performance -->
<!-- <template functional> -->
<template>
<div id="browser-support" class="z9999">
  <dialog id="browser-support-dialog" class="pa3" open>
    <button @click="hide" class="btn btn-clear float-r">
      <svg class="icon"><use xlink:href="~@/assets/icons/x.svg"/></svg>
    </button>

    <h2 class="mv1">Warning!</h2>

    <p class="lead red">Your browser is not supported</p>
    <p>You can continue however our site may not work properly. For your end-users we maintain a wide range of browser support but this app interface we keep simple.</p>
    <p><a href="https://wearegenki.com/legal/browser-support" target="_blank" rel="noopener">Learn more about our browser support</a>.</p>
    <p>Please upgrade to a modern web browser. We <em>highly recommend</em> you use the latest version of Google Chrome.</p>

    <!-- TODO: Enterprise users may not have the ability to install software so put a notice about what to tell your IT support/team -->
    <!--
    <div class="mb4">
      <button class="dib btn-clear link">Don't have permission to install software?</button>
    </div>
    -->

    <a href="https://www.google.com/chrome" class="btn btn-main ml1" target="_blank" rel="noopener">Download Chrome</a>
    <button @click="hide" class="btn ml3">
      Continue
    </button>
  </dialog>
</div>
</template>

<script>
export default {
  name: 'browser-support',
  mounted() {
    this.$emit('open');
  },
  methods: {
    hide() {
      window.localStorage.setItem('compat', 1); // Disable compatibility check
      this.$emit('close');
      this.$destroy();
    },
  },
};
</script>

<style>
@import "css/import";

#browser-support { /* stylelint-disable-line selector-max-id */
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  content: "";
  background: var(--shadow-colour);
  backdrop-filter: blur(4px);
}

#browser-support-dialog { /* stylelint-disable-line selector-max-id */
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: block;
  max-width: 30rem;
  margin: auto;
  color: var(--body-colour);
  background: var(--body-bg);
  border: 0;
  box-shadow: var(--shadow);
}
</style>
