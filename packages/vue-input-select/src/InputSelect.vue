<!-- FIXME: Skip over disabled option when using keyboard input -->
<!-- TODO: Check all events etc. are actually necessary -->
<!-- TODO: Add animation, something like Google play music search -->

<!--
  TODO: Add documentation, especially options stucture:
  [
    { id: 'ex1', text: 'Example 1' },
    { id: 'ex2', text: 'Example 2' },
    { id: 'ex3', text: 'Example 3', disabled: true },
  ]
-->

<template>
  <div class="pos-r dif f-col" :class="{ 'input-select-active': active }">
    <input
      @click="active ? false : open()"
      @focus="open"
      @blur="blur"
      @keydown.space="active ? false : open()"
      @keydown.enter.prevent="active ? select('enter') : toggle()"
      @keydown.esc="close"
      @keydown.up="up"
      @keydown.down="active ? down() : open()"
      v-model="text"
      class="select"
      :tabindex="this.$attrs.disabled === undefined ? 0 : -1"
      role="listbox"
      placeholder="Search..."
      :readonly="this.$attrs.readonly || !active"
      :disabled="this.$attrs.disabled !== undefined"
    >
    <span class="input-select-caret"/>

    <div
      v-show="active"
      @mousedown.prevent="select"
      class="input-select-dropdown w-100 z1"
    >
      <option
        v-for="(option, index) in list"
        :key="option.id"
        :data-id="option.id"
        class="input-select-option bg-alt"
        :class="{ 'selected': index === selected}"
        role="option"
        :disabled="option.disabled"
      >
        {{ option.text }}
      </option>
      <div v-if="!list.length" class="pv2 ph3 grey">
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
  },
  data: () => ({
    active: false,
    searchText: '',
    selected: 0,
  }),
  computed: {
    list() {
      const search = this.searchText.toLowerCase();
      return this.options.filter(option => option.text.toLowerCase().indexOf(search) > -1);
    },
    text: {
      get() {
        if (this.active) {
          return this.searchText;
        }

        const current = this.options.find((option, index) => {
          this.selected = index; // eslint-disable-line
          return option.id === this.value;
        });
        return current.text;
      },
      set(value) {
        this.searchText = value;
      },
    },
  },
  methods: {
    open() {
      if (this.$attrs.disabled === undefined) {
        this.active = true;
      }
    },
    close() {
      this.active = false;
    },
    toggle() {
      if (this.active) {
        this.close();
      } else {
        this.open();
      }
    },
    select(event) {
      if (event.target && !event.target.disabled && event.target.dataset.id) {
        this.$emit('input', event.target.dataset.id);
        this.close();
      } else if (event === 'enter' && !this.options[this.selected].disabled) {
        this.$emit('input', this.options[this.selected].id);
        this.close();
      }
    },
    blur() {
      this.close();
    },
    up() {
      this.selected -= 1;
    },
    down() {
      this.selected += 1;
    },
  },
};
</script>

<style>
@import "css/import";

.input-select-caret {
  position: absolute;
  top: calc(50% - 2px);
  right: 0.75rem;
  width: 0;
  height: 0;
  border-top: 0.3rem solid var(--blue-grey-800);
  border-right: 0.3rem solid transparent;
  border-left: 0.3rem solid transparent;

  .input-select-active > & {
    transform: rotate(180deg);
  }
}

.input-select-dropdown {
  position: absolute;
  top: 100%;
  left: 0;
  font-size: 1.2rem;
  color: var(--body-colour);
  background-color: var(--white);
  box-shadow: var(--shadow);
}

.input-select-option {
  padding: var(--input-padding-y) var(--input-padding-x);

  &.selected,
  &:hover,
  &:focus {
    color: var(--white);
    background-color: var(--link-hover-colour);
  }
}
</style>
