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

  NOTE:
    Object properties ending with __ are marked safe to mangle; the name can be
    shortened at build time for smaller file size.

-->

<template>
  <header class="navbar z5" :class="{ 'navbar-active': nt || show }">
    <div class="df-l con">
      <button
        @click.stop="show = !show"
        type="button"
        class="dn-l btn-clear mr3"
      >
        <svg class="nav-icon link">
          <use :xlink:href="show ? close__ : menu__"/>
        </svg>
      </button>

      <router-link to="/" class="nav-logo ml-1-l" title="home">
        <svg class="logo"><use :xlink:href="logo__"/></svg>
      </router-link>

      <nav class="dn df-l f-col f-row-l ml-auto-l mh-1" :class="{ 'df': show }">
        <hr class="dn-l mv0">

        <router-link
          v-once
          v-for="item in items"
          :key="item.url"
          :to="item.url"
          class="nav-link"
        >
          {{ item.name }}
        </router-link>
      </nav>
    </div>
  </header>
</template>

<script>
import menu from '@wearegenki/icons/src/menu.svg';
import close from '@wearegenki/icons/src/x.svg';
import logo from '@/assets/logo.svg'; // eslint-disable-line import/no-unresolved

export default {
  name: 'TheNavbar',
  props: {
    items: {
      type: Array,
      required: true,
    },
  },
  data: () => ({
    show: false, // should show mobile/hamberger menu?
    nt: false, // is not at top?
  }),
  computed: {
    // Check for passive eventListener support
    supportsPassive__() {
      let support = false;
      try {
        document.addEventListener('test', null, {
          get passive() { support = true; }, // eslint-disable-line getter-return
        });
      } catch (e) { /* noop */ }

      return support;
    },
  },
  watch: {
    // Set up click handler to close the menu but only when necessary
    show(isActive) {
      if (isActive) {
        const listener = () => {
          this.show = false;
          document.removeEventListener('click', listener);
        };
        document.addEventListener('click', listener);
      }
    },
  },
  beforeCreate() {
    this.menu__ = menu;
    this.close__ = close;
    this.logo__ = logo;
  },
  mounted() {
    this.checkScroll__();
    this.setUpEventHandler__();
  },
  methods: {
    checkScroll__() {
      this.nt = window.scrollY > 10; // px before triggering
    },

    setUpEventHandler__() {
      const usePassive = this.supportsPassive__ ? { passive: true } : false;
      const _this = this;
      let ticking = false;

      function step() {
        _this.checkScroll__();
        ticking = false;
      }

      // debounce using requestAnimationFrame
      function scrollHandler() {
        if (!ticking) {
          requestAnimationFrame(step);
        }
        ticking = true;
      }

      // use passive listener for better performance
      document.addEventListener('scroll', scrollHandler, usePassive);
    },
  },
};
</script>

<style>
@import "@wearegenki/ui/import";

.navbar {
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  background-color: var(--navbar-bg-colour);

  @if var(--use-drop-shadow) {
    filter: drop-shadow(var(--navbar-shadow-before));
    transition:
      filter var(--navbar-shadow-fade-speed) ease,
      transform var(--navbar-animate-speed) ease;

      @if var(--navbar-optimize) {
        will-change: filter, transform;
      }
  } @else { /* stylelint-disable-line */
    > .con {
      transition: transform var(--navbar-animate-speed) ease;

      @if var(--navbar-optimize) {
        will-change: transform;
      }
    }

    &::after {
      position: absolute;
      top: 0;
      bottom: 0;
      z-index: -1;
      width: 100%;
      height: 100%;
      content: "";
      box-shadow: var(--navbar-shadow-legacy);
      opacity: 0;
      transition: opacity var(--navbar-shadow-fade-speed) ease;

      @if var(--navbar-optimize) {
        will-change: opacity;
      }
    }
  }

  .nav-link {
    margin-top: 0.2rem;
  }
}

.navbar-active {
  @if var(--use-drop-shadow) {
    & {
      filter: drop-shadow(var(--navbar-shadow));
      transform: translateY(-3px);
    }
  } @else { /* stylelint-disable-line */
    & > .con {
      transform: translateY(-3px);
    }

    &::after {
      opacity: 1;
    }
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
