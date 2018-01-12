<template>
  <dl class="pos-f r0 b0 dg x2 compact pv2 ph3 mv0 white bold" id="breakpoints">
    <dt>none</dt>
    <dd class="ml2" :class="none ? 'green' : 'red'">{{ none }}</dd>
    <dt>s</dt>
    <dd class="ml2" :class="s ? 'green' : 'red'">{{ s }}</dd>
    <dt>l</dt>
    <dd class="ml2" :class="l ? 'green' : 'red'">{{ l }}</dd>
  </dl>
</template>

<script>
const none = matchMedia('(max-width: 30em)');
const s = matchMedia('(min-width: 30.01em) and (max-width: 48em)');
const l = matchMedia('(min-width: 48.01em)');

export default {
  name: 'DebugBreakpoints',
  data: () => ({
    none: none.matches,
    s: s.matches,
    l: l.matches,
  }),
  mounted() {
    this.setListeners();
  },
  methods: {
    setListeners() {
      none.addListener((event) => { this.none = event.matches; });
      s.addListener((event) => { this.s = event.matches; });
      l.addListener((event) => { this.l = event.matches; });
    },
  },
};
</script>

<style>
#breakpoints { /* stylelint-disable-line selector-max-id */
  background-color: rgba(0, 0, 0, 0.6);
}
</style>
