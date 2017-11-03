// REF: https://material.io/guidelines/components/snackbars-toasts.html#snackbars-toasts-usage

<template>
<div class="toast df" :class="`toast-${type}`">
  <span class="toast-msg">{{ text }}</span>
  <button v-if="action === 'reload'" @click="reload" class="toast-action">RELOAD</button>
  <button v-else-if="action" @click="destroy" class="toast-action ttu">{{ action }}</button>
</div>
</template>

<script>
export default {
  name: 'Toast',
  props: {
    id: {
      type: [Number, String],
      required: true,
    },
    text: {
      type: String, // Text only, no HTML allowed
      required: true,
    },
    type: { // error, warn
      type: String,
      default: undefined,
    },
    action: {
      type: String,
      default: undefined,
    },
    callback: { // called when component is destroyed
      type: Function,
      default: undefined,
    },
    timeout: {
      type: Number,
      default: 8, // seconds
    },
  },
  mounted() {
    if (!document.hidden) {
      this.setTimeoutHandler();
    } else {
      const vm = this;

      // wait for user to view the page before triggering the toast
      document.addEventListener('visibilitychange', function visHandler() {
        vm.setTimeoutHandler();
        document.removeEventListener('visibilitychange', visHandler);
      });
    }
  },
  destroyed() {
    // run callback function and pass if the action button was clicked
    if (this.callback) this.callback(this.clicked);
  },
  methods: {
    destroy(event) {
      if (event && event.type === 'click') this.clicked = true;

      this.$emit('destroy', { id: this.id });
    },
    setTimeoutHandler() {
      window.setTimeout(this.destroy, this.timeout * 1000);
    },
    reload() {
      window.location.reload();
    },
  },
};
</script>

<style>
@import "css/import";

.toast {
  position: fixed;
  bottom: 1.2rem;
  left: 2rem;
  z-index: var(--toast-z-index);
  min-width: 24rem;
  max-width: 100%;
  padding: 1.1rem 1.5rem;
  color: var(--white);
  background-color: var(--grey-900);
  box-shadow: var(--shadow);
  transition: transform 0.15s ease-out; /* animate in */
  transform: translateY(0);
  will-change: transform;

  &.v-enter,
  &.v-leave-to {
    transition: transform 0.3s ease-in; /* animate out */
    transform: translateY(102%);
  }
}

.toast-action {
  padding: 1rem 1.4rem;
  margin: -1rem -1rem -1rem auto;
  color: var(--blue-500);
  background-color: transparent;
  border: 0;

  &:hover,
  &:focus {
    color: var(--blue-400);
  }

  .toast-warn > & {
    color: var(--amber-400);
  }

  .toast-error > & {
    color: var(--red-400);
  }
}

.toast-msg {
  font-size: 1.1rem;
}
</style>
