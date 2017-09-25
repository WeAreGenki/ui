<!-- TODO: Read through material design docs about toasts -->

<template>
<div class="toast">
  <button v-if="reload" @click="reloadPage" class="toast-link">RELOAD</button>
  <button v-else-if="canDismiss" @click="destroy" class="toast-link">DISMISS</button>
  <a v-if="link" :href="link" class="toast-link">{{ typeof link === String ? link : 'LINK' }}</a>
  <span class="toast-msg">{{ text }}</span>
</div>
</template>

<script>
export default {
  name: 'toast',
  props: {
    id: {
      type: Number,
      required: true,
    },
    link: {
      type: [Boolean, String],
      default: '',
    },
    text: {
      type: String, // Text only, no HTML allowed
      default: '',
    },
    timeout: {
      type: Number,
      default: 6000,
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
  mounted() {
    // A timeout value of -1 means it's a permanent toast
    if (this.timeout !== -1) {
      this.setTimeoutHandler();
    } else {
      // Without a timeout the toast must be user dismissible
      this.dismissible = true;
    }
  },
  methods: {
    destroy() {
      this.$emit('destroy', this.id);
    },
    setTimeoutHandler() {
      window.setTimeout(() => { this.destroy(); }, this.timeout);
    },
    reloadPage() {
      location.reload(); // eslint-disable-line no-restricted-globals
    },
  },
};
</script>

<style>
@import "css/import";

/* TODO: Toast stacking (?) */
/* FIXME: Permanent toast can be dismissed by other toasts */

.toast {
  position: fixed;
  bottom: 0;
  left: 6rem;
  z-index: var(--toast-z-index);
  padding: 1.2rem 1.5rem 1rem;
  color: var(--white);
  background-color: var(--blue-600);
  box-shadow: 0 1rem 2rem 0 var(--shadow);
  transition: transform 0.15s ease-out; /* animate in */
  transform: translateY(0);
  will-change: transform;

  &.v-enter,
  &.v-leave-to {
    transition: transform 0.3s ease-in; /* animate out */
    transform: translateY(102%);
  }
}

.toast-link {
  padding: 1rem 1.4rem;
  margin: -1rem 0 -1rem -1rem;
  font-weight: bold;
  color: var(--blue-100);
  cursor: pointer;
  background-color: transparent;
  border: 0;

  &:hover,
  &:focus,
  &:active {
    color: var(--blue-200);
  }
}

.toast-msg {
  font-size: 1.13rem;
}
</style>
