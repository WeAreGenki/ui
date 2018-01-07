<!-- TODO: Add other ARIA recommendations + role=tablist might not be correct on <nav> -->

<template>
  <div class="tab-group">
    <!--
    <div class="tab-header">
      <button v-for="slot in $slots.tab" class="btn-clear" type="button">
        {{ slot.data.attrs.name }}
      </button>
    </div>

    <div v-for="slot in $slots.tab" class="tab-content">
      <slot name="tab"/>
    </div>
    -->

    <nav class="nav-tabs df mb4" role="tablist">
      <a @click="active = 0" href="#tab1" class="btn-tab ttu" :class="{ 'active': active === 0}" role="tab">Tab title 1</a>
      <a @click="active = 1" href="#tab2" class="btn-tab ttu" :class="{ 'active': active === 1}" role="tab">Tab title 2</a>
      <a @click="active = 2" href="#tab3" class="btn-tab ttu" :class="{ 'active': active === 2}" role="tab">Tab title 3</a>
    </nav>

    <div v-show="active === 0" id="tab1" class="tab-content" role="tabpanel">
      Content 1
    </div>

    <div v-show="active === 1" id="tab2" class="tab-content" role="tabpanel">
      Content 2
    </div>

    <div v-show="active === 2" id="tab3" class="tab-content" role="tabpanel">
      Content 3
    </div>
  </div>
</template>

<script>
export default {
  name: 'TabGroup',
  data: () => ({
    active: 0,
  }),
  mounted() {
    console.log('@@ THIS', this);
  },
};
</script>

<style>
@import "@wearegenki/ui/import";

/* .tab-group {} */

.nav-tabs {}

.btn-tab {
  padding: 1rem 1.5rem;
  font-size: 1.2rem;
  font-weight: bold;
  border-bottom: 4px solid transparent;

  /* border: 1px solid var(--grey-500); */

  /* DELME; for testing */
  /* background-color: var(--red-50); */

  &:hover,
  &:focus {
    text-decoration: none;
    border-bottom-color: var(--grey-400);
  }

  &.active {
    border-bottom-color: var(--primary);
    cursor: default;
  }
}

/* .tab-content {} */
</style>
