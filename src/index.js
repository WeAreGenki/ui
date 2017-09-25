import BrowserSupport from './components/BrowserSupport.vue';
import DebugBreakpoints from './components/DebugBreakpoints.vue';
import Futurelink from './components/Futurelink.vue';
import Toast from './components/Toast.vue';

const install = function install(Vue) {
  Vue.component(this.name, this);
};

BrowserSupport.install = install;
DebugBreakpoints.install = install;
Futurelink.install = install;
Toast.install = install;

export {
  BrowserSupport,
  DebugBreakpoints,
  Futurelink,
  Toast,
};
