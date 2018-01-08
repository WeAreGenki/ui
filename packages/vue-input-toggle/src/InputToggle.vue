<!--
  INPUT TOGGLE COMPONENT

  README:
    This component is intended to be an alternative to checkbox inputs in forms
    when there's a need to toggle something with an on and off state. From a UX
    perspective, it should be clearly understood that something is being turned
    on or off.

    An example of this is a switch to turn on or off sound in an interactive web
    app. On the other hand, you should use a checkbox when users are accustomed
    to seeing a checkbox such as an input to accept terms and conditions in a
    transaction flow. That said, most of the time this is a great option.

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

      <InputToggle v-model="toggle" text-on="YES" text-off="NO"/>

  NOTES:
    * All the CSS variables for this component are in:
      @wearegenki/css/src/_variables.css
    * It's a good idea to add a title attribute so desktop users can understand
      the elements purpose more clearly.
    * If following accessibility guidelines it's recommended to label the purpose
      of the toggle by adding an aria-label or aria-labelledby attribute.
    * If used in a form this component won't send any data by default. If you wish
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
    :class="{ 'input-toggle-checked': value }"
    :tabindex="this.$attrs.disabled === undefined ? 0 : -1"
    role="button"
    :aria-pressed="value.toString()"
  >
    <div class="input-toggle-slider"/>
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
      required: true,
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
@import "@wearegenki/ui/import";

/* the toggle purposely looks like .btn and uses many of the button variables */
.input-toggle {
  position: relative;
  z-index: 1; /* prevent repaint of other elements; promote to new stacking context */
  display: inline-flex;
  align-items: center;
  width: var(--input-toggle-width);
  padding: var(--btn-padding-y) 0;
  line-height: 1;
  color: var(--input-toggle-off-text-colour);
  cursor: pointer;
  background-color: var(--input-toggle-off-bg-colour);
  border-radius: var(--btn-radius);
  box-shadow: var(--input-toggle-inner-shadow);
  transition: background-color var(--input-toggle-fade-out-speed) ease-out;
  transition-delay: 0s;
  will-change: background-color;

  @if var(--use-drop-shadow) {
    filter: drop-shadow(var(--btn-shadow));
  } @else { /* stylelint-disable-line */
    box-shadow: var(--btn-shadow-legacy);
  }

  &.input-toggle-checked {
    background-color: var(--input-toggle-on-bg-colour);
    transition: background-color var(--input-toggle-fade-in-speed) ease-in;
    transition-delay: var(--input-toggle-fade-out-speed);
  }

  &.mini {
    width: var(--input-toggle-mini-width);
    padding: calc(var(--btn-padding-y) / 2) 0;
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

  &[disabled] {
    color: var(--btn-disabled-text-colour);
    background-color: var(--btn-bg-colour);
    border: 1px solid var(--btn-disabled-border-colour);
    box-shadow: none; /* inner shadow */
    transition: none;
    will-change: auto;

    @if var(--use-drop-shadow) {
      filter: none;
    }
  }
}


.input-toggle-on,
.input-toggle-off {
  flex-basis: calc(var(--input-toggle-width) / 2);
}

.input-toggle-on {
  color: var(--input-toggle-on-text-colour);

  .input-toggle[disabled] > & {
    color: var(--btn-disabled-text-colour);
  }
}

.input-toggle-slider {
  position: absolute;
  top: 0;
  bottom: 0;
  width: 50%;
  background: var(--btn-bg-colour);
  border-radius: var(--btn-radius);
  box-shadow: var(--input-toggle-slider-inner-shadow);
  transition: transform var(--input-toggle-slider-speed) ease-out;
  will-change: transform;

  .input-toggle-checked > & {
    transform: translateX(100%);
  }

  .input-toggle:hover > &,
  .input-toggle:focus > & {
    background: var(--input-toggle-hover-slider-bg-colour);
  }

  [disabled] > & {
    box-shadow: none; /* inner shadow */
    transition: none;
    will-change: auto;
  }

  /* stylelint-disable-next-line no-descending-specificity */
  [disabled] > &,
  [disabled]:hover > &,
  [disabled]:focus > & {
    background: var(--input-toggle-disabled-slider-bg-colour);
  }
}
</style>
