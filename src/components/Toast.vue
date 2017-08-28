<!-- TODO: Read through material design docs about toasts -->

<template>
<div class="toast">
  <button v-if="reload" @click="reloadPage" class="toast-link">RELOAD</button>
  <button v-else-if="dismissible" @click="destroy" class="toast-link">DISMISS</button>
  <!-- TODO: Link to reload the page -->
  <a v-if="link" :href="link" class="toast-link">{{ linkText || 'LINK' }}</a>
  <span class="toast-msg">{{ text }}</span>
</div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'toast',
  data() {
    return {
      dismissible: this.canDismiss,
    };
  },
  props: {
    id: Number,
    link: String,
    'link-text': String,
    text: String, // Text only, no HTML
    timeout: {
      type: Number,
      default: 6000
    },
    canDismiss: {
      type: Boolean,
      default: false,
    },
    // Useful when the app has gone offline and hasn't auto healed itself
    reload: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    ...mapActions([
      'removeToast',
    ]),
    destroy() {
      this.removeToast({ id: this.id });
    },
    setTimeoutHandler() {
      window.setTimeout(() => { this.destroy() }, this.timeout);
    },
    reloadPage() {
      location.reload()
    },
  },
  mounted() {
    // A timeout value of -1 means it's a permanent toast
    if (this.timeout !== -1) {
      this.setTimeoutHandler();
    } else {
      // Without a timeout the toast must be user dismissible
      this.dismissible = true;
    }
  },
};
</script>

<style type="postcss">
@import "../../css/import.postcss";

/* TODO: Toast stacking (?) */

.toast {
  position: absolute;
  bottom: 0;
  left: 100px;
  z-index: $toast-zindex;
  padding: 1.2rem 1.5rem 1rem;
  color: $white;
  background-color: $blue-600;
  box-shadow: 0 0 1rem $shadow; // FIXME: Better aesthetics; layered shadow effect?
  transition: transform 0.15s ease-out; // Animate in
  transform: translateY(0);
  will-change: transform;

  &.v-enter,
  &.v-leave-to {
    transition: transform 0.3s ease-in; // Animate out
    transform: translateY(102%);
  }
}

.toast-link {
  padding: 1rem 1.4rem;
  margin: -1rem 0 -1rem -1rem;
  font-weight: bold;
  color: $blue-100;
  cursor: pointer;
  background-color: transparent;
  border: 0;

  &:hover,
  &:focus,
  &:active {
    color: $blue-200;
  }
}

.toast-msg {
  font-size: 1.13rem;
}
</style>
