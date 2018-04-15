<template>
  <dl id="breakpoints" class="pos-f r0 b0 dg x2 gc pv2 ph3 mv0 z9999 white bold">
    <dt>root</dt>
    <dd :class="root ? 'green' : 'red'" class="ml2">
      {{ root }}
    </dd>

    <dt>s</dt>
    <dd :class="s ? 'green' : 'red'" class="ml2">
      {{ s }}
    </dd>

    <dt>l</dt>
    <dd :class="l ? 'green' : 'red'" class="ml2">
      {{ l }}
    </dd>
  </dl>
</template>

<script>
const root = matchMedia('(max-width: 30em)');
const s = matchMedia('(min-width: 30.01em) and (max-width: 48em)');
const l = matchMedia('(min-width: 48.01em)');

export default {
  name: 'DebugBreakpoints',
  data: () => ({
    root: root.matches,
    s: s.matches,
    l: l.matches,
  }),
  mounted() {
    this.setListeners();
  },
  methods: {
    setListeners() {
      root.addListener((event) => { this.root = event.matches; });
      s.addListener((event) => { this.s = event.matches; });
      l.addListener((event) => { this.l = event.matches; });
    },
  },
};
</script>

<style lang="postcss">
#breakpoints { /* stylelint-disable-line selector-max-id */
  background-color: hsla(0, 0%, 0%, 0.6);
}
</style>
