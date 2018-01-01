<!-- TODO: Allow user to drag the toggle from one side to the other (mouse or touch), must be high performance and not jank the UI -->

<template>
<div @click="toggle" class="input-toggle tc" :class="{'checked': value}" :checked="value">
  <div class="input-toggle-on">ON</div>
  <div class="input-toggle-off">OFF</div>
  <div class="input-toggle-slider"></div>
</div>
</template>

<script>
export default {
  name: 'InputToggle',
  props: {
    value: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    toggle() {
      this.$emit('input', !this.value);
    },
  },
};
</script>

<style>
@import "css/import";

.input-toggle {
  position: relative;
  display: inline-flex;
  align-items: center;
  width: var(--input-toggle-width);
  padding: var(--btn-padding-y) 0;
  line-height: 1;
  color: var(--btn-text-colour);
  cursor: pointer;
  background-color: var(--btn-bg-colour);
  border-radius: var(--btn-radius);
  box-shadow: var(--btn-shadow);
  transition: background-color var(--input-toggle-fade-out-speed) ease-out;
  transition-delay: 0s;
  will-change: background-color;

  &.checked {
    background-color: var(--input-toggle-on-bg-colour);
    transition: background-color var(--input-toggle-fade-in-speed) ease-in;
    transition-delay: var(--input-toggle-fade-out-speed);
  }

  /* TODO: Disabled state */
  &:disabled {}

  /* spacing when next to buttons */
  & + .btn,
  .btn + & {
    margin-left: var(--btn-margin-between);
  }
}

.input-toggle-on,
.input-toggle-off {
  flex-basis: calc(var(--input-toggle-width) / 2);
}

.input-toggle-on {
  color: var(--input-toggle-on-text-colour);
}

.input-toggle-slider {
  position: absolute;
  top: 0;
  width: 50%;
  height: 100%;
  background-image: var(--input-toggle-slider-gradient);
  border-right: 2px solid var(--input-toggle-slider-edge-colour);
  border-left: 2px solid var(--input-toggle-slider-edge-colour);
  border-radius: var(--btn-radius);
  transition: transform var(--input-toggle-slide-speed) ease-in-out;
  will-change: transform;

  .input-toggle.checked & {
    transform: translateX(100%);
  }
}
</style>
