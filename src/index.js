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
