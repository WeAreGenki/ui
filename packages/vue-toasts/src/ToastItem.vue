<!-- REF: https://material.io/guidelines/components/snackbars-toasts.html#snackbars-toasts-usage -->

<!-- FIXME: Need a visual way to differenciate toast types, especially error toasts -->
<!-- TODO: Work on action toasts-->

<template>
  <div class="toast df" :class="{ [`toast-${type}`]: type !== undefined }">
    <span class="toast-msg">{{ text }}</span>
    <button v-if="action === 'reload'" @click="reload" class="toast-action">RELOAD</button>
    <button v-else-if="action" @click="destroy" class="toast-action ttu">{{ action }}</button>
  </div>
</template>

<script>
export default {
  name: 'ToastItem',
  props: {
    id: {
      type: [Number, String],
      required: true,
    },
    text: {
      type: String, // text only, no HTML allowed
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
    cb: { // callback, run when component is destroyed
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
    if (this.cb) this.cb(this.clicked);
  },
  methods: {
    destroy(event) {
      if (event && event.type === 'click') this.clicked = true;

      this.$emit('destroy', { id: this.id });
    },
    setTimeoutHandler() {
      setTimeout(this.destroy, this.timeout * 1000);
    },
    reload() {
      window.location.reload();
    },
  },
};
</script>

<style>
@import "@wearegenki/ui/import";

.toast {
  position: fixed;
  bottom: var(--toast-item-botom);
  left: var(--toast-item-left);
  z-index: var(--toast-item-zindex);
  min-width: var(--toast-item-width);
  max-width: 100%;
  padding: var(--toast-item-padding-y) var(--toast-item-padding-x);
  color: var(--toast-item-colour);
  background-color: var(--toast-item-bg-colour);
  box-shadow: var(--toast-item-shadow);
  transition: transform var(--toast-item-slide-in-speed) ease-out;
  will-change: transform;
}

.toast-enter,
.toast-leave-to {
  transition: transform var(--toast-item-slide-out-speed) ease-in;
  transform: translateY(102%);
}

.toast-action {
  padding: 1rem 1.4rem;
  margin: -1rem -1rem -1rem auto;
  color: var(--toast-item-action-colour);
  background-color: transparent;
  border: 0;

  &:hover,
  &:focus {
    color: var(--toast-item-action-colour-hover);
  }

  .toast-warn > & {
    color: var(--toast-item-warning-colour);
  }

  .toast-error > & {
    color: var(--toast-item-error-colour);
  }
}

.toast-msg {
  font-size: var(--toast-item-text-size);
}
</style>
