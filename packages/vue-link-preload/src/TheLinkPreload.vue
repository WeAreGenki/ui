<!--
  Based on vue-futurelink with customisation for simplicity and performance
  REF: https://github.com/SamKnows/vue-futurelink
-->

<template>
  <div class="dn" aria-hidden="true">
    <Component :is="load"/>
  </div>
</template>

<script>
import futurelink from 'futurelink';

export default {
  name: 'TheLinkPreload',
  data: () => ({
    load: null,
    options: {
      links: [],
    },
  }),
  mounted() {
    // don't run on server
    if (typeof window === 'undefined') return;

    // don't run on mobile
    if ('ontouchstart' in window) return;

    const loaded = [this.$route.path];

    this.options.future = (link) => {
      const href = link.getAttribute('href');

      if (loaded.includes(href)) return;

      loaded.push(href);

      const resolver = this.$router.resolve(href);
      const { matched } = resolver.resolved;
      this.load = matched[matched.length - 1].components.default;
    };

    futurelink(this.options);

    this.__init();
    this.$router.afterEach(this.__init);
  },
  methods: {
    __init() {
      // no need to use $nextTick since it doesn't need to be immediate
      setTimeout(() => {
        const links = document.querySelectorAll('a[href^="/"]');

        // fancy high performance way to convert nodeList into Array
        // eslint-disable-next-line no-plusplus
        for (let i = -1, l = links.length; ++i !== l; this.options.links[i] = links[i]);
      }, 0);
    },
  },
};
</script>
