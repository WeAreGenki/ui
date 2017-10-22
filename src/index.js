import Navbar from './components/Navbar.vue';
import Modal from './components/Modal.vue';
import Futurelink from './components/Futurelink.vue';
import Toast from './components/Toast.vue';
import CodeEditor from './components/CodeEditor.vue';
import BrowserSupport from './components/BrowserSupport.vue';
import DebugBreakpoints from './components/DebugBreakpoints.vue';

const install = function install(Vue) {
  Vue.component(this.name, this);
};

Navbar.install = install;
Modal.install = install;
Futurelink.install = install;
Toast.install = install;
CodeEditor.install = install;
BrowserSupport.install = install;
DebugBreakpoints.install = install;

export {
  Navbar,
  Modal,
  Futurelink,
  Toast,
  CodeEditor,
  BrowserSupport,
  DebugBreakpoints,
};
