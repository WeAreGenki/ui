import BrowserSupport from './components/BrowserSupport.vue';
import CodeEditor from './components/CodeEditor.vue';
import DebugBreakpoints from './components/DebugBreakpoints.vue';
import InputDropdown from './components/InputDropdown.vue';
import InputToggle from './components/InputToggle.vue';
import ModalItem from './components/ModalItem.vue';
import TabGroup from './components/TabGroup.vue';
import TheFuturelink from './components/TheFuturelink.vue';
import TheNavbar from './components/TheNavbar.vue';
import ToastGroup from './components/ToastGroup.vue';

const install = function install(Vue) {
  Vue.component(this.name, this);
};

BrowserSupport.install = install;
CodeEditor.install = install;
DebugBreakpoints.install = install;
InputDropdown.install = install;
InputToggle.install = install;
ModalItem.install = install;
TabGroup.install = install;
TheFuturelink.install = install;
TheNavbar.install = install;
ToastGroup.install = install;

export {
  BrowserSupport,
  CodeEditor,
  DebugBreakpoints,
  InputDropdown,
  InputToggle,
  ModalItem,
  TabGroup,
  TheFuturelink,
  TheNavbar,
  ToastGroup,
};
