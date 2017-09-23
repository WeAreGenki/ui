// FIXME: Small screen responsive buttons

<template>
<div v-if="active" id="browser-support">
  <dialog>
    <button @click="hide" class="btn btn-clear float-r">
      <svg class="icon"><use xlink:href="~@/assets/icons/x.svg"/></svg>
    </button>

    <h2 class="mt1">Warning!</h2>

    <p class="lead">You're using an unsupported browser.</p>

    <p>You can continue however our site may not work properly. For your end-users we maintain a wide range of browser support but this admin interface we keep simple.</p>

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
      <!-- <svg class="icon"><use xlink:href="~@/assets/icons/x.svg"/></svg> -->
      Continue
    </button>
  </dialog>
</div>
</template>

<script>
/* eslint-disable no-use-before-define */

import { mapMutations } from 'vuex';

export default {
  name: 'BrowserSupport',
  data() {
    return {
      active: false,
    };
  },
  computed: {
    isSupported() {
      // Skip if user has already bypassed
      if (!window.localStorage.getItem('bypassCompat')) {
        const ua = window.navigator.userAgent;
        console.log(ua); // eslint-disable-line

        // FIXME: Implement browser detection

        return false;
      }
      return true;
    },
  },
  mounted() {
    if (!this.isSupported) {
      this.show();
    }
  },
  methods: {
    ...mapMutations([
      'toggleScrollLock',
    ]),
    show() {
      this.active = true;
      this.toggleScrollLock();
    },
    hide() {
      this.active = false;
      this.toggleScrollLock();

      // Disable compatibility check
      window.localStorage.setItem('bypassCompat', true);
    },
  },
};
</script>

<style>
@import "css/import";

#browser-support {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 9999;

  &::after {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: -1;
    content: '';
    background-color: var(--shadow);
    backdrop-filter: blur(4px);
  }
}

dialog {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: block;
  max-width: 30rem;
  margin: auto;
  color: var(--body-colour);
  background-color: var(--body-bg);
  border: 0;
  box-shadow: 0 1rem 2rem 0 var(--shadow);
}
</style>
