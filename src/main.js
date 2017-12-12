/**
 * @wearegenki/ui
 * @author: Max Milton <max@wearegenki.com>
 *
 * Copyright 2017 We Are Genki
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import './css/main.css';
// import '../.components.postcss';

import {
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
} from './components';

const WagUi = {
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

  install(Vue) {
    if (this.installed) return;

    Vue.component('BrowserSupport', BrowserSupport);
    Vue.component('CodeEditor', CodeEditor);
    Vue.component('DebugBreakpoints', DebugBreakpoints);
    Vue.component('InputDropdown', InputDropdown);
    Vue.component('InputToggle', InputToggle);
    Vue.component('ModalItem', ModalItem);
    Vue.component('TabGroup', TabGroup);
    Vue.component('TheFuturelink', TheFuturelink);
    Vue.component('TheNavbar', TheNavbar);
    Vue.component('ToastGroup', ToastGroup);
  },
};

// Automatically install wag-ui if Vue is available globally
if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(WagUi);
}

export default WagUi;
