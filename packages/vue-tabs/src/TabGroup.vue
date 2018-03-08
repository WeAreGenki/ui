<!--
  TAB GROUP COMPONENT

  README:
    Puts your content into interactive tabs; loads the content the just the active
    tab at a time. A useful way to split up a user interface so some content is
    visible while the rest is hidden. In general, if you can get away without
    using tabs it's better because often users won't realise they can click on
    the tabs so your content goes to waste.

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

<!--
  TODO: Better looking tab UI
  ↳ REF: https://cloud.google.com/vision/
-->
<!-- TODO: Make it more visually obvious that the tabs are clickable -->
<!-- TODO: Add ARIA recommendations + role=tablist might not be correct on <nav> -->

<template>
  <div>
    <nav class="df mb4" role="tablist">
      <a
        v-for="(slot, name) in $slots"
        :key="name"
        :href="`#${encodeURIComponent(name)}`"
        :class="{ 'btn-tab-active': active === name }"
        class="btn-tab ttu bold"
        role="tab"
        @click="active = name"
      >
        {{ name }}
      </a>
    </nav>

    <div
      v-for="(slot, name) in $slots"
      v-if="active === name"
      :key="name"
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

<style lang="postcss">
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
}

.btn-tab-active {
  cursor: default;
  border-bottom-color: var(--tab-border-colour);
}
</style>
