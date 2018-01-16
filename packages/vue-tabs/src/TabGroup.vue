<!--
  TAB GROUP COMPONENT

  README:
    TODO: Write me.

  USAGE:

    <TabGroup>
      <template slot="title of tab">
        tab 1 contents
      </template>

      <template slot="another tab title">
        tab 2 contents
      </template>

      <template slot="tab 3">
        <div class="con">
          tab 3 contents
        </div>
      </template>
    </TabGroup>

-->

<!-- TODO: Add ARIA recommendations + role=tablist might not be correct on <nav> -->

<template>
  <div>
    <nav class="df mb4" role="tablist">
      <a
        v-for="(slot, name) in $slots"
        :key="name"
        @click="active = name"
        :href="`#${encodeURIComponent(name)}`"
        class="btn-tab ttu bold"
        :class="{ 'active': active === name }"
        role="tab"
      >
        {{ name }}
      </a>
    </nav>

    <div
      v-for="(slot, name) in $slots"
      :key="name"
      v-if="active === name"
      :id="name"
      role="tabpanel"
    >
      <slot :name="name"/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TabGroup',
  data() {
    return {
      active: this.$route && this.$route.hash
        ? decodeURIComponent(this.$route.hash.substr(1))
        : Object.keys(this.$slots)[0],
    };
  },
};
</script>

<style>
@import "@wearegenki/ui/import";

.btn-tab {
  padding: var(--btn-padding-y) var(--btn-padding-x);
  font-size: var(--tab-font-size);
  border-bottom: var(--tab-border-width) solid transparent;

  &:hover,
  &:focus {
    text-decoration: none;
    border-bottom-color: var(--tab-hover-border-colour);
  }

  &.active {
    border-bottom-color: var(--tab-border-colour);
    cursor: default;
  }
}
</style>
