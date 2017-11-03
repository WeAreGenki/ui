<!--
  Based on vue-futurelink with customisations for simplicity and performance
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
  name: 'Futurelink',
  data() {
    return {
      load: undefined,
      options: {
        links: [],
      },
    };
  },
  mounted() {
    // Don't run on the server
    if (typeof window === 'undefined') {
      return;
    }

    // Don't run on mobile
    if ('ontouchstart' in window) {
      return;
    }

    const loaded = [this.$route.path];

    this.options.future = (link) => {
      const href = link.getAttribute('href');

      if (loaded.includes(href)) {
        return;
      }

      loaded.push(href);

      // this.$emit('preload', href);

      const resolved = this.$router.resolve(href);
      const { matched } = resolved.resolved;
      this.load = matched[matched.length - 1].components.default;
    };

    futurelink(this.options);

    this.init();
    this.$router.afterEach(this.init);
  },
  methods: {
    init() {
      this.$nextTick(() => {
        const links = document.querySelectorAll('a[href^="/"');
        // Populate this.options.links {Array} from links {nodeList}
        for (let i = -1, l = links.length; ++i !== l; this.options.links[i] = links[i]); // eslint-disable-line no-plusplus
      });
    },
  },
};
</script>
