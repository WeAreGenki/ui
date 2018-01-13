<!-- REF: https://material.io/guidelines/components/snackbars-toasts.html#snackbars-toasts-usage -->

<!-- FIXME: Need a visual way to differentiate toast types, especially error toasts -->

<!-- TODO: Work on action toasts-->

<template>
  <div class="toast df" :class="{ [`toast-${type}`]: type !== undefined }">
    {{ text }}

    <button v-if="action === 'reload'" @click="reload" class="toast-action" type="button">
      RELOAD
    </button>
    <button v-else-if="action" @click="destroy" class="toast-action ttu" type="button">
      {{ action }}
    </button>
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
      document.addEventListener('visibilitychange', function visibilityHandler() {
        vm.setTimeoutHandler();
        document.removeEventListener('visibilitychange', visibilityHandler);
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
  bottom: var(--toast-item-bottom);
  left: var(--toast-item-left);
  z-index: var(--toast-item-zindex);
  min-width: var(--toast-item-width);
  max-width: 100%;
  padding: var(--toast-item-padding-y) var(--toast-item-padding-x);
  font-size: var(--toast-item-font-size);
  color: var(--toast-item-font-colour);
  background-color: var(--toast-item-bg-colour);
  transition: transform var(--toast-item-animate-in-speed) ease-out;
  will-change: transform;

  @if var(--use-drop-shadow) {
    filter: drop-shadow(var(--toast-item-shadow));
  } @else { /* stylelint-disable-line */
    box-shadow: var(--toast-item-shadow-legacy);
  }
}

.toast-enter,
.toast-leave-to {
  transition: transform var(--toast-item-animate-out-speed) ease-in;
  transform: translateY(102%);
}

.toast-action {
  padding: 1rem 1.4rem;
  margin: -1rem -1rem -1rem auto;
  color: var(--toast-item-action-font-colour);
  background-color: transparent;
  border: 0;

  &:hover,
  &:focus {
    color: var(--toast-item-action-hover-font-colour);
  }

  .toast-warn > & {
    color: var(--toast-item-warning-font-colour);
  }

  .toast-error > & {
    color: var(--toast-item-error-font-colour);
  }
}
</style>
