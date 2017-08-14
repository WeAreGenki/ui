import Vue from 'vue';
import Raven from 'raven-js';
import RavenVue from 'raven-js/plugins/vue';
import App from './App';
import router from './router';

Vue.config.productionTip = false;

// Uncomment for devtools in production builds;
// Vue.config.devtools = true;

// Runtime performance tracing
// README:
//   Trace component init, compile, render, and patch time in the browser devtools
//   timeline. Works in dev mode. Uncomment only when debugging performance.
// Vue.config.performance = true;

// Error tracking
if (!process.env.NODE_ENV === 'development') {
  Raven
    .config('https://3b3214cd26e543eeb8d339839e61d01b@errors.wearegenki.com/10') // FIXME: Set correct #
    .addPlugin(RavenVue, Vue)
    .install();
}

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App),
});
