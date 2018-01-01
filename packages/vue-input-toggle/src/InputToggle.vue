<!--
  INPUT TOGGLE COMPONENT

  README:
    This component is intended to be an alterntive to checkbox inputs in forms
    when there's a need to toggle something with an on and off state. From a UX
    perspective it should be clearly understood that something is being turnned
    on or off.

    An example of this is a switch to turn on or off sound in an interactive web
    app. As a counter example, you should use a checkbox when users are
    accustomed to seeing a checkbox such as an input to accept terms and
    conditions in a transaction flow.

  USAGE:
    Simply import this component into your vue file and use it in your template
    as if it was a normal input; bind it to a vue model. Example:

      <InputToggle v-model="toggle"/>

    The default toggle is the same size as buttons. If this is too big, you can
    add the .mini class for a compact version. Example:

      <InputToggle v-model="toggle" class="mini"/>

    It's possible to change the text from "ON"/"OFF" by passing the props textOn
    and textOff. If you change this you'll likely need to modify the width too,
    which can be done via the --input-toggle-width CSS variable. Example:

      <InputToggle v-model="toggle" textOn="YES" textOff="NO"/>

  NOTES:
    * All the CSS variables for this component are in:
      @wearegenki/css/src/_variables.css
    * If following accessability guidelines it's recommened to label the purpose
      of the toggle by adding a aria-label or aria-labelledby attribute.
    * If used in a form this component wont send any data by default. If you wish
      to use it as a form input you'll need to bind the v-model to a hidden input.
    * Only <input> can use the [disabled] attribute so we have to use a class.

-->

<!-- TODO: Add ability to drag the toggle from one side to the other using mouse or touch — must be high performance and not cause UI jank -->

<template>
  <div
    @click="toggle"
    @keydown.space="toggle"
    @keydown.enter="toggle"
    class="input-toggle tc"
    :class="{ 'checked': value }"
    :tabindex="this.$attrs.disabled === undefined ? 0 : -1"
    role="button"
    :aria-pressed="value.toString()"
  >
    <div class="input-toggle-slider"></div>
    <div class="input-toggle-on">{{ textOn }}</div>
    <div class="input-toggle-off">{{ textOff }}</div>
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
    textOn: {
      type: String,
      default: 'ON',
    },
    textOff: {
      type: String,
      default: 'OFF',
    },
  },
  methods: {
    toggle() {
      if (this.$attrs.disabled === undefined) {
        this.$emit('input', !this.value);
      }
    },
  },
};
</script>

<style>
@import "css/import";

/* the toggle purpsourly looks like .btn and uses many of the button variables */
.input-toggle {
  position: relative;
  display: inline-flex;
  align-items: center;
  width: var(--input-toggle-width);
  padding: var(--btn-padding-y) 0;
  line-height: 1;
  color: var(--input-toggle-off-text-colour);
  cursor: pointer;
  background-color: var(--input-toggle-off-bg-colour);
  border-radius: var(--btn-radius);
  box-shadow:
    var(--input-toggle-shadow),
    var(--btn-shadow);
  transition: background-color var(--input-toggle-fade-out-speed) ease-out;
  transition-delay: 0s;
  will-change: background-color;

  &.checked {
    background-color: var(--input-toggle-on-bg-colour);
    transition: background-color var(--input-toggle-fade-in-speed) ease-in;
    transition-delay: var(--input-toggle-fade-out-speed);
  }

  &.mini {
    width: var(--input-toggle-width-mini);
    padding: calc(var(--btn-padding-y) / 2) 0;
  }

  &[disabled] {
    color: var(--btn-text-colour-disabled);
    cursor: not-allowed;
    background-color: var(--btn-bg-colour);
    box-shadow: var(--btn-shadow);
  }

  &:hover,
  &:focus {
    outline: none;
  }

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

  .input-toggle[disabled] > & {
    color: var(--btn-text-colour-disabled);
  }
}

.input-toggle-slider {
  position: absolute;
  top: 0;
  bottom: 0;
  width: 50%;
  background: var(--btn-bg-colour);
  border-radius: var(--btn-radius);
  box-shadow: var(--input-toggle-slider-shadow);
  transition: transform var(--input-toggle-slider-speed) ease-out;
  will-change: transform;

  .input-toggle.checked & {
    transform: translateX(100%);
  }

  .input-toggle:hover > &,
  .input-toggle:focus > & {
    background: var(--input-toggle-slider-colour);
  }

  .input-toggle[disabled] > &,
  .input-toggle[disabled]:hover > & {
    background: var(--input-toggle-slider-colour-disabled);
    box-shadow: none;
  }
}
</style>
