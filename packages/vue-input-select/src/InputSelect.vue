<!--
  INPUT SELECT COMPONENT

  README:
    TODO: Write me.

    Features:
      - Automatically opens on focus for taster form input when using a keyboard for navigating.

  USAGE:
    TODO: Add documentation, especially options stucture.

    [
      { id: 'ex1', text: 'Example 1' },
      { id: 'ex2', text: 'Example 2' },
      { id: 'ex3', text: 'Example 3', disabled: true },
    ]

-->

<!-- TODO: How can we make it more obvious that the input is only for filtering and users can't create new options -->

<template>
  <div class="pos-r dif f-col">
    <input
      @click="active ? false : open()"
      @focus="open"
      @blur="false || close"
      @keydown.space="active ? false : open()"
      @keydown.enter.prevent="active ? select('enter') : open()"
      @keydown.esc="close"
      @keydown.up.prevent="active ? up() : open()"
      @keydown.down.prevent="active ? down() : open()"
      v-model="valueText"
      class="select"
      :tabindex="disabled ? -1 : 0"
      role="listbox"
      :placeholder="placeholder"
      :readonly="readonly || !active"
      :disabled="disabled"
    >
    <span class="input-select-caret" :class="{ 'input-select-active': active }"/>

    <transition name="input-select">
      <div
        v-show="active"
        @mousedown.prevent="select"
        class="input-select-dropdown w-100 z5"
      >
        <option
          v-for="(option, index) in list"
          :key="option.id"
          :data-id="option.id"
          class="input-select-option"
          :class="{ 'selected': index === i}"
          role="option"
          :disabled="option.disabled"
        >
          {{ option.text }}
        </option>
        <div v-if="!list.length" class="pa3 grey">
          No matches
        </div>
      </div>
    </transition>
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
    placeholder: { // for filter input
      type: String,
      default: 'Filter...',
    },
    readonly: {
      type: Boolean,
      default: undefined,
    },
    disabled: {
      type: Boolean,
      default: undefined,
    },
  },
  data: () => ({
    active: false,
    filter: '',
    i: 0,
  }),
  computed: {
    list() {
      const search = this.filter.toLowerCase();
      const list = this.options.filter(option => option.text.toLowerCase().indexOf(search) > -1);
      this.setIndex(list);
      return list;
    },
    valueText: {
      get() {
        if (this.active) {
          return this.filter;
        }

        const current = this.options.find(option => option.id === this.value);
        return current.text;
      },
      set(value) {
        this.filter = value;
      },
    },
  },
  methods: {
    setIndex(list = this.list) {
      // save the current item's index so we can highlight it in the list
      this.i = list.findIndex(option => option.id === this.value);
    },
    open() {
      if (this.$attrs.disabled === undefined) {
        this.setIndex();
        this.active = true;
      }
    },
    close() {
      this.active = false;
      this.filter = '';
    },
    select(event) {
      if (
        event.target
        && !event.target.disabled
        && event.target.dataset.id
      ) {
        this.$emit('input', event.target.dataset.id);
        this.close();
      } else if (event === 'enter' && !this.list[this.i].disabled) {
        this.$emit('input', this.list[this.i].id);
        this.close();
      }
    },
    up() {
      if (this.i <= 0) return;

      let steps = 1;

      while (this.list[this.i - steps].disabled) {
        steps += 1;
        if (this.list[this.i - steps] === undefined) return;
      }

      this.i -= steps;
    },
    down() {
      // jump to last availiable item if index is out of bounds (e,g, after filtering)
      if (this.i >= this.list.length - 1) this.i = this.list.length - 1;

      let steps = 1;

      while (this.list[this.i + steps].disabled) {
        steps += 1;
        if (this.list[this.i + steps] === undefined) return;
      }

      this.i += steps;
    },
  },
};
</script>

<style>
@import "@wearegenki/ui/import";

.input-select-caret {
  position: absolute;
  top: calc(50% - (var(--input-select-caret-size) / 2));
  right: 0.75rem;
  width: 0;
  height: 0;
  border-top: var(--input-select-caret-size) solid var(--input-select-caret-colour);
  border-right: var(--input-select-caret-size) solid transparent;
  border-left: var(--input-select-caret-size) solid transparent;

  &.input-select-active {
    transform: rotate(180deg);
  }

  [disabled] + & {
    border-top-color: var(--input-select-disabled-caret-colour);
  }
}

.input-select-dropdown {
  position: absolute;
  top: 100%;
  left: 0;
  font-size: var(--input-text-size);
  color: var(--input-text-colour);
  background-color: var(--input-bg-colour);
  box-shadow: var(--shadow);
  transition:
    transform var(--input-select-animate-speed) ease,
    opacity var(--input-select-animate-speed) ease;
  will-change: transform, opacity;

  &.input-select-enter,
  &.input-select-leave-to {
    opacity: 0;
    transform: translateY(-1rem);
  }
}

.input-select-option {
  padding: var(--input-padding-y) var(--input-padding-x);

  &.selected,
  &:not([disabled]):hover {
    color: var(--input-select-selected-text-colour);
    background-color: var(--input-select-selected-bg-colour);
  }

  &[disabled] {
    color: var(--input-select-disabled-text-colour);
  }
}
</style>
