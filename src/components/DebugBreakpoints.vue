<template>
<div id="debug-breakpoints">
  <dl class="code mv0">
    <dt>xs</dt>
    <dd :class="xs ? 'green' : 'red'">{{ xs }}</dd>
    <dt>s</dt>
    <dd :class="s ? 'green' : 'red'">{{ s }}</dd>
    <dt>ns</dt>
    <dd :class="ns ? 'green' : 'red'">{{ ns }}</dd>
    <dt>m</dt>
    <dd :class="m ? 'green' : 'red'">{{ m }}</dd>
    <dt>l</dt>
    <dd :class="l ? 'green' : 'red'">{{ l }}</dd>
  </dl>
</div>
</template>

<script>
// Define breakpoints
// TODO: Can these be extracted from the CSS custom media variables?
const xs = matchMedia('(max-width: 29.999em)');
const s = matchMedia('(min-width: 30em) and (max-width: 48em)');
const m = matchMedia('(min-width: 48.01em) and (max-width: 64em)');
const l = matchMedia('(min-width: 64.01em)');

export default {
  name: 'DebugBreakpoints',
  data: () => ({
    xs: xs.matches,
    s: s.matches,
    m: m.matches,
    l: l.matches,
  }),
  computed: {
    ns() {
      return this.m || this.l;
    },
  },
  mounted() {
    this.setListeners();
  },
  methods: {
    setListeners() {
      xs.addListener((event) => { this.xs = event.matches; });
      s.addListener((event) => { this.s = event.matches; });
      m.addListener((event) => { this.m = event.matches; });
      l.addListener((event) => { this.l = event.matches; });
    },
  },
};
</script>

<style>
@import "css/import";

#debug-breakpoints { /* stylelint-disable-line selector-max-id */
  position: fixed;
  right: 0;
  bottom: 0;
  padding: 0.5rem 1rem;
  font-weight: 700;
  color: var(--white);
  background-color: rgba(0, 0, 0, 0.6);
}
</style>
