// ENTRY POINT FOR ROLLUP COMPILATION

import './css/main.css';
// import '../.components.postcss';

import {
  BrowserSupport,
  DebugBreakpoints,
  Futurelink,
  Toast,
} from './index';

const WagUi = {
  BrowserSupport,
  DebugBreakpoints,
  Futurelink,
  Toast,

  install(Vue) {
    if (this.installed) return;

    Vue.component('browser-support', BrowserSupport);
    Vue.component('debug-breakpoints', DebugBreakpoints);
    Vue.component('futurelink', Futurelink);
    Vue.component('toast', Toast);
  },
};

// Automatically install wag-ui if Vue is available globally
if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(WagUi);
}

export default WagUi;
