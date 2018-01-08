<!--
  TAB GROUP COMPONENT

  README:
    TODO: Write me.

  USAGE:
    TODO: Write me.

-->

<!-- TODO: Add ARIA recommendations + role=tablist might not be correct on <nav> -->

<template>
  <div>
    <nav class="df mb4" role="tablist">
      <a
        v-for="(slot, name) in $slots"
        @click="active = name"
        :href="`#${name}`"
        class="btn-tab ttu"
        :class="{ 'active': active === name }"
        role="tab"
      >
        {{ slot[0].data.attrs.title }}
      </a>
    </nav>

    <div
      v-for="(slot, name) in $slots"
      v-show="active === name"
      :id="name"
      role="tabpanel"
    >
      <slot :name="slot[0].data.slot"/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TabGroup',
  data() {
    return {
      active: this.$route && this.$route.hash
        ? this.$route.hash.substr(1)
        : Object.keys(this.$slots)[0],
    };
  },
};
</script>

<style>
@import "@wearegenki/ui/import";

.btn-tab {
  padding: 1rem 1.5rem;
  font-size: 1.2rem;
  font-weight: bold;
  border-bottom: 4px solid transparent;

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
</style>
