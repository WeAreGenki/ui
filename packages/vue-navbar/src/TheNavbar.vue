<!--

  NAVBAR COMPONENT

    A simple fixed top navigation bar with a floating effect upon scrolling.
    Will collapse into a hamburger menu when the screen width is small.

  README:
    The "items" property should be an array of objects which look like this:

      <navbar :items="[
        { url: '/our-brands', name: 'Our Brands' },
        { url: '/ecommerce-tools', name: 'Ecommerce Tools' },
        { url: '/consulting', name: 'Consulting' },
      ]"/>

    Menu and close icons are already included but you need to supply your logo
    as a SVG. Place the file in "assets/logo.svg" and it will be automatically
    resolved by this component.

    You may need to adjust size and whitespace to suite your logo. See the CSS
    variables below in .nav-icon + .logo and .nav-logo.

  NOTE:
    Object properties ending with __ are safe to mangle; the name can be
    shortened at build time for smaller file size.

-->

<template>
  <header :class="{ 'navbar-active': nt || show }" class="navbar">
    <nav class="df-l con" role="navigation">
      <div class="dfc">
        <button
          :aria-expanded="show ? 'true' : 'false'"
          type="button"
          class="dn-l btn-clear btn-menu"
          aria-label="menu toggle"
          @click.stop="show = !show"
        >
          <svg class="nav-icon link">
            <use :xlink:href="show ? '#x' : '#menu'"/>
          </svg>
        </button>

        <router-link to="/" title="Home">
          <svg id="navbar-logo" class="logo">
            <use xlink:href="#logo"/>
          </svg>
        </router-link>
      </div>

      <div
        :class="{ 'df': show }"
        class="dn df-l f-col f-row-l navbar-links"
      >
        <router-link to="/" class="nav-link dn-l">
          Home
        </router-link>

        <router-link
          v-for="item in items"
          :key="item.url"
          :to="item.url"
          class="nav-link"
        >
          {{ item.name }}
        </router-link>
      </div>
    </nav>
  </header>
</template>

<script>
import '@wearegenki/icons/src/menu.svg';
import '@wearegenki/icons/src/x.svg';
import '@/assets/logo.svg'; // eslint-disable-line import/no-unresolved

export default {
  name: 'TheNavbar',
  props: {
    items: {
      type: Array,
      required: true,
    },
  },
  data: () => ({
    show: false, // show hamburger menu?
    nt: false, // not top; is the page scrolled?
  }),
  computed: {
    // check for passive eventListener support
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
    // set up click handler to close the menu but only when necessary
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
      document.addEventListener('scroll', () => {
        if (!ticking) {
          requestAnimationFrame(step);
        }
        ticking = true;
      }, usePassive); // use passive listener for better performance
    },
  },
};
</script>

<style lang="postcss">
@import "@wearegenki/ui/import";

.navbar {
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: var(--navbar-zindex);
  padding-top: var(--navbar-animate-distance); /* offset for animation movement */
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
    /**
     * Legacy shadows are a special case. Because `box-shadow` is not GPU
     * hardware accelerated we animate using `opacity` on a pseudo element
     * instead which is hardware accelerated.
     */

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
      content: "";
      box-shadow: var(--navbar-shadow-legacy);
      opacity: 0;
      transition: opacity var(--navbar-shadow-fade-speed) ease;

      @if var(--navbar-optimize) {
        will-change: opacity;
      }
    }
  }
}

.navbar-active {
  @if var(--use-drop-shadow) {
    filter: drop-shadow(var(--navbar-shadow));
    transform: translateY(calc(-1 * var(--navbar-animate-distance)));
  } @else { /* stylelint-disable-line */
    & > .con {
      transform: translateY(calc(-1 * var(--navbar-animate-distance)));
    }

    &::after {
      opacity: 1;
    }
  }
}

.btn-menu {
  padding: 0;
  margin-right: 1.2rem;
}

.nav-icon {
  width: var(--navbar-icon-size);
  height: var(--navbar-icon-size);
  padding: var(--navbar-icon-padding);
  margin: 0;
}

.logo {
  width: var(--navbar-logo-size-x);
  height: var(--navbar-logo-size-y);
}

.navbar-links {
  padding: calc(var(--nav-link-padding-y) / 2) 0;
  margin: 0 -1rem;
  border-top: 1px solid transparent;

  .navbar-active & {
    border-color: var(--grey-300);
  }

  @media (--breakpoint-large) {
    padding: 0;
    margin: 0 -1rem 0 auto;
  }
}

/* offset the page content so it's not covered by the fixed navbar */
body {
  margin-top: var(--navbar-body-offset);
}

/**
 * This is a workaround when clicking on a link with a internal target location
 * (a link to another place within the same page). Since the target element is
 * moved to the top of the page it becomes covered by the fixed navbar. We get
 * around this using an invisible pseudo element with an offset position which
 * is attached to any heading with an id.
 *
 * Only add an id property to a heading when truly necessary to avoid the small
 * CSS rendering performance hit.
 */
.h1,
h1,
.h2,
h2,
.h3,
h3,
.h4,
h4,
.h5,
h5,
.h6,
h6 {
  &[id]::before {
    display: block;
    height: var(--navbar-anchor-offset);
    margin-top: calc(-1 * var(--navbar-anchor-offset));
    visibility: hidden;
    content: "";
  }
}
</style>
