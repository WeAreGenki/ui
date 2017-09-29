<template>
<header class="navbar-fixed" :class="{ 'active': scrolled || showNav }">
    <div class="df-ns con">
      <button @click.stop="showNav = !showNav" class="dn-ns btn-clear nav-link ml-1">
        <i class="menu"></i>
      </button>

      <router-link to="/" class="nav-link ml-1-ns">
        <svg class="logo"><use xlink:href="~@/assets/logo.svg"/></svg>
      </router-link>

      <!-- TODO: Add expand side nav animation OR remove <transition> -->
      <transition>
        <nav class="dn df-ns f-col f-row-ns ml-auto-ns mh-1" :class="{ 'df': showNav }">
          <hr class="dn-ns mv0">
          <router-link v-for="item in items" :key="item.url"
            to="/our-brands" class="nav-link"
          >
            {{ item.name }}
          </router-link>
        </nav>
      </transition>
    </div>
  </header>
</template>

<script>
export default {
  name: 'navbar',
  props: {
    items: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      showNav: false,
      scrolled: false,
    };
  },
  computed: {
    // Check for passive eventListener support
    // FIXME: Might not be necessary for regular scroll, what about touch scroll?
    supportsPassive() {
      let support = false;
      try {
        const options = Object.defineProperty({}, 'passive', {
          get() { support = true; }, // eslint-disable-line getter-return
        });
        window.addEventListener('test', null, options);
      } catch (e) {} // eslint-disable-line no-empty
      return support;
    },
  },
  watch: {
    showNav(active) {
      if (active) {
        const listener = () => {
          this.showNav = false;
          window.removeEventListener('click', listener);
        };
        window.addEventListener('click', listener);
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
      window.addEventListener('scroll', () => {
        if (!ticking) {
          window.requestAnimationFrame(() => {
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
@import "css/import";

.navbar-fixed {
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 10;
  background-color: var(--body-bg);

  > .con {
    transition: transform 0.2s ease-in-out;
    will-change: transform;
  }

  &.active > .con {
    transform: translateY(-2px) translateZ(0); /* translateZ forces GPU rendered layer on browsers which don't support will-change */
  }

  &::after {
    position: absolute;
    top: 0;
    bottom: 0;
    z-index: -1;
    width: 100%;
    content: '';
    box-shadow: 0 0.5rem 2rem 0 var(--shadow-colour);
    opacity: 0;
    transition: opacity 0.3s ease-in-out;
    will-change: opacity;
  }

  &.active::after {
    opacity: 1;
  }

  .nav-link {
    margin-top: 0.2rem;
  }
}
</style>
