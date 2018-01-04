<!--

  NAVBAR COMPONENT

    A simple fixed top navigation bar with a floating effect upon scrolling. Will
    collapse into a hamburger menu when the screen width is small.

  README:
    The `items` property should be an array of objects with a url and name key, e.g.:

      <navbar :items="[
        { url: '/our-brands', name: 'Our Brands' },
        { url: '/ecommerce-tools', name: 'Ecommerce Tools' },
        { url: '/consulting', name: 'Consulting' },
      ]"/>

TODO: Rewrite this: new changes since we now have @wearegenki/icons
    You need to supply a logo and menu/close icons as SVG (since each project will
    likely have its own icon set):

      logo  = assets/logo.svg
      menu  = assets/icons/menu.svg
      close = assets/icons/x.svg

    You need to adjust .nav-icon + .logo width/height and .nav-logo padding to suit
    your SVGs.

-->

<template>
  <header class="navbar-fixed z5" :class="{ 'active': scrolled || showNav }">
    <div class="df-l con">
      <button @click.stop="showNav = !showNav" class="dn-l btn-clear mr3">
        <svg class="nav-icon link">
          <use v-if="showNav" xlink:href="~@wearegenki/icons/src/x.svg"/>
          <use v-else xlink:href="~@wearegenki/icons/src/menu.svg"/>
        </svg>
      </button>

      <router-link to="/" class="nav-logo ml-1-l">
        <svg class="logo"><use xlink:href="~@/assets/logo.svg"/></svg>
      </router-link>

      <nav class="dn df-l f-col f-row-l ml-auto-l mh-1" :class="{ 'df': showNav }">
        <hr class="dn-l mv0">
        <router-link v-for="item in items" :key="item.url" :to="item.url" class="nav-link">
          {{ item.name }}
        </router-link>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  name: 'TheNavbar',
  props: {
    items: {
      type: Array,
      required: true,
    },
  },
  data: () => ({
    showNav: false,
    scrolled: false,
  }),
  computed: {
    // Check for passive eventListener support
    // FIXME: Might not be necessary for regular scroll, what about touch scroll?
    supportsPassive() {
      let support = false;
      try {
        const options = Object.defineProperty({}, 'passive', {
          get() { support = true; }, // eslint-disable-line getter-return
        });
        document.addEventListener('test', null, options);
      } catch (e) {} // eslint-disable-line no-empty
      return support;
    },
  },
  watch: {
    // Set up click handler to close the menu but only when necessary
    showNav(active) {
      if (active) {
        const listener = () => {
          this.showNav = false;
          document.removeEventListener('click', listener);
        };
        document.addEventListener('click', listener);
      }
    },
  },
  mounted() {
    this.scrollHandler();
  },
  methods: {
    scrollHandler() {
      let ticking = false;

      // Listen to scroll events using requestAnimationFrame to debounce
      document.addEventListener('scroll', () => {
        if (!ticking) {
          requestAnimationFrame(() => {
            // Set property used to conditionally add a class in the component template
            this.scrolled = window.scrollY > 10;
            ticking = false;
          });
        }
        ticking = true;
      // Use passive eventListener if supported for better performance
      }, this.supportsPassive ? { passive: true } : false);
    },
  },
};
</script>

<style>
@import "@wearegenki/ui/import";

.navbar-fixed {
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  background-color: var(--navbar-bg-colour);

  > .con {
    transition: transform var(--navbar-animate-speed) ease-in-out;
    will-change: transform;
  }

  &.active > .con {
    transform: translateY(-2px);
  }

  &::after {
    position: absolute;
    top: 0;
    bottom: 0;
    z-index: -1;
    width: 100%;
    content: "";
    box-shadow: var(--navbar-shadow);
    opacity: 0;
    transition: opacity var(--navbar-shadow-fade-speed) ease-in-out;
    will-change: opacity;
  }

  &.active::after {
    opacity: 1;
  }

  .nav-link {
    margin-top: 0.2rem;
  }
}

.nav-icon {
  width: var(--navbar-icon-size);
  height: var(--navbar-icon-size);
}

.logo {
  width: var(--navbar-logo-size-x);
  height: var(--navbar-logo-size-y);
}

.nav-logo {
  display: inline-block;
  padding: var(--navbar-logo-padding);
  margin: 0;
}
</style>
