/**
 * @wearegenki/vue-directive-tooltip
 * @author: Max Milton <max@wearegenki.com>
 *
 * Copyright 2018 We Are Genki
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

// TODO: Handle long multi line text

// TODO: Add ARIA recommendations: http://accessibility.athena-ict.com/aria/examples/tooltip.shtml

const tooltips = new WeakMap();
let baseClass = 'tooltip';
let wrapperClass = 'has-tooltip';

const vTooltip = {
  bind(el, { value, modifiers }) {
    // default to top tooltip if no modifier is used
    const direction = Object.keys(modifiers)[0] || 'top';

    // create the tooltip element
    const tooltip = document.createElement('span');
    tooltip.classList.add('hide', `${baseClass}-${direction}`); // TODO: @TESTING: IE compatibility with multiple arguments
    tooltip.setAttribute('role', 'tooltip');
    tooltip.innerText = value;

    // inject into the page and track a reference for fast access during updates
    tooltips.set(el, el.appendChild(tooltip));

    // add class to trigger on hover etc.
    el.classList.add(wrapperClass);
  },

  update(el, { value, oldValue }) {
    if (value === oldValue) return;

    // get the actual tooltip element from stored reference + update text
    const tooltip = tooltips.get(el);
    tooltip.innerText = value;
  },

  unbind(el, binding, vnode, oldVnode, isDestroy) {
    // explicitly remove the tooltip element reference when the element is destroyed
    if (!isDestroy) {
      el.classList.remove(wrapperClass);
    } else {
      tooltips.delete(el);
    }
  },
};

function install(Vue, options = {}) {
  const name = options.name || 'tooltip';
  baseClass = options.baseClass || baseClass;
  wrapperClass = options.wrapperClass || wrapperClass;

  Vue.directive(name, vTooltip);
}

export default {
  install, // for global install
  vTooltip, // for local install
};
