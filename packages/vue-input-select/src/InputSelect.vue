<!--

  INPUT SELECT COMPONENT

  README:
    TODO: Write me.

    Features:
      - Automatically opens on focus for taster form input when using a keyboard for navigating.

  USAGE:
    TODO: Add documentation, especially options structure.

    [
      { id: 'ex1', text: 'Example 1' },
      { id: 'ex2', text: 'Example 2' },
      { id: 'ex3', text: 'Example 3', disabled: true },
    ]

  NOTE:
    Object properties beginning or ending with __ are marked safe to mangle; the
    name can be shortened at build time for smaller file size.

-->

<!--
  TODO: Possible future features (but avoid bloat and negative performance impact):
    - Incorporate remaining WAI-ARIA recommendations.
    - Horizontal divider to visually group options (maybe with optional title).
    - Different dropdown position when not enough space OR maybe just move the
      viewport to be able to see the currently selected item if it's outside the
      viewport.
-->

<template>
  <div class="pos-r dif f-col">
    <!--
      * Prevent default on enter so the form isn't submitted
      * And on up/down too so the cursor doesn't move when the user has entered
        text in the input.
    -->
    <input
      @click="active__ ? false : __open()"
      @focus="__open"
      @blur="__close"
      @keydown.space="active__ ? false : __open()"
      @keydown.enter.prevent="active__ ? __select('enter') : __open()"
      @keydown.esc="__close"
      @keydown.up.prevent="active__ ? __up() : __open()"
      @keydown.down.prevent="active__ ? __down() : __open()"
      v-model="__valueText"
      class="select"
      :class="{ 'input-select-active': active__ }"
      :id="id"
      :tabindex="disabled ? -1 : 0"
      role="listbox"
      :placeholder="filterable && active__ ? filterHelp : placeholder"
      :readonly="disabled === undefined && (!filterable || readonly || !active__)"
      :disabled="disabled"
    >
    <span class="input-select-caret"/>

    <!--
      * Use mousedown event and prevent default so that clicks doesn't trigger
      the above input's blur event.
      * Uses custom directive v-view which must be installed globally
    -->
    <div
      v-view="active__"
      @mousedown.prevent="__select"
      class="input-select-dropdown w-100 z5 tl"
    >
      <div
        v-for="(option, index) in __list"
        :key="option.id"
        :data-id="option.id"
        class="input-select-option"
        :class="{ 'input-select-active': index === i }"
        role="option"
        :disabled="option.disabled"
      >
        {{ option.text }}
      </div>
      <div v-if="!__list.length" class="pa3 grey">
        No matches
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'InputSelect',
  props: {
    value: {
      type: String,
      required: true,
    },
    options: {
      type: Array,
      required: true,
    },
    filterable: { // to disable filtering when unnecessary
      type: Boolean,
      default: true,
    },
    filterHelp: { // text when filter input is empty
      type: String,
      default: 'Filter...',
    },
    placeholder: { // text when no option is selected
      type: String,
      default: 'Choose...',
    },
    // the below props will be attached to the input (rather than the wrapper div)
    id: {
      type: String,
      default: undefined,
    },
    readonly: {
      type: [String, Boolean],
      default: undefined,
    },
    disabled: {
      type: [String, Boolean],
      default: undefined,
    },
  },
  data: () => ({
    active__: false,
    filter__: '',
    i: 0, // index of the currently selected item
  }),
  computed: {
    __list() {
      const search = this.filter__.toLowerCase();
      const list = this.options.filter(option => option.text.toLowerCase().indexOf(search) > -1);

      // recalculate current item index after filtering
      this.__setIndex(list);

      return list;
    },
    __valueText: {
      get() {
        if (this.filterable && this.active__) {
          return this.filter__;
        }

        const current = this.options.find(option => option.id === this.value);

        return current ? current.text : '';
      },
      set(value) {
        this.filter__ = value;
      },
    },
  },
  methods: {
    __setIndex(list = this.__list) {
      // save the current item's index so we can highlight it in the list
      this.i = list.findIndex(option => option.id === this.value);
    },
    __open() {
      if (this.disabled === undefined) {
        this.__setIndex();
        this.active__ = true;
      }
    },
    __close() {
      this.active__ = false;
      this.filter__ = '';
    },
    __select(event) {
      if (
        event.target
        && !event.target.disabled
        && event.target.dataset.id
      ) {
        this.$emit('input', event.target.dataset.id);
        this.__close();
      } else if (event === 'enter' && !this.__list[this.i].disabled) {
        this.$emit('input', this.__list[this.i].id);
        this.__close();
      }
    },
    __up() {
      if (this.i <= 0) return;

      let steps = 1;

      // skip over disabled items or if there's no items left
      while (this.__list[this.i - steps].disabled) {
        steps += 1;
        if (this.__list[this.i - steps] === undefined) return;
      }

      this.i -= steps;
    },
    __down() {
      // jump to last availiable item if index is out of bounds (e,g, after filtering)
      if (this.i >= this.__list.length - 1) {
        this.i = this.__list.length - 1;
        return;
      }

      let steps = 1;

      // skip over disabled items or if there's no items left
      while (this.__list[this.i + steps].disabled) {
        steps += 1;
        if (this.__list[this.i + steps] === undefined) return;
      }

      this.i += steps;
    },
  },
};
</script>

<style>
@import "@wearegenki/ui/import";

.input-select-active {
  cursor: auto;
}

.input-select-caret {
  position: absolute;
  top: calc(50% - (var(--input-select-caret-size) / 2));
  right: 0.75rem;
  pointer-events: none;

  @if var(--input-select-optimize) {
    will-change: transform;
  }

  @mixin triangle bottom, var(--input-select-caret-size), var(--input-select-caret-colour);

  .input-select-active + & {
    transform: rotate(180deg);
  }

  [disabled] + & {
    border-top-color: var(--input-select-disabled-caret-colour);
  }
}

/* NOTE: Opacity is controlled by custom directive; v-view */
.input-select-dropdown {
  position: absolute;
  top: 100%;
  left: 0;
  padding: var(--input-padding-y) 0;
  font-size: var(--input-font-size);
  color: var(--input-font-colour);
  background-color: var(--input-bg-colour);
  transition:
    transform var(--input-select-animate-speed) ease,
    opacity var(--input-select-animate-speed) ease;

  @if var(--input-select-optimize) {
    will-change: transform, opacity;
  }

  @if var(--use-drop-shadow) {
    filter: drop-shadow(var(--input-select-shadow));
  } @else { /* stylelint-disable-line */
    box-shadow: var(--input-select-shadow-legacy);
  }

  &.hide {
    transform: translateY(-1rem);
  }

  /* don't render the dropdown when disabled to free memory */
  [disabled] ~ & {
    display: none;

    @if var(--input-select-optimize) {
      will-change: auto;
    }
  }
}

.input-select-option {
  padding: var(--input-padding-y) var(--input-padding-x);

  &.input-select-active,
  &:not([disabled]):hover {
    color: var(--input-select-selected-font-colour);
    background-color: var(--input-select-selected-bg-colour);
  }

  &[disabled] {
    color: var(--input-select-disabled-font-colour);
  }
}
</style>
