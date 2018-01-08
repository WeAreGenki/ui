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

// TODO: Add ARIA recommendations: http://accessibility.athena-ict.com/aria/examples/tooltip.shtml

const vTooltip = {
  bind(el, { value, modifiers }) {
    const direction = Object.keys(modifiers)[0] || 'top';

    const tooltip = document.createElement('span');
    tooltip.classList.add('hide', 'tooltip', `tooltip-${direction}`); // TODO: @TESTING: IE compatibility with multiple arguments
    tooltip.setAttribute('role', 'tooltip');
    tooltip.innerText = value;

    el.appendChild(tooltip);

    el.classList.add('has-tooltip');
  },
};

function install(Vue, options = {}) {
  const name = options.name || 'tooltip';

  Vue.directive(name, vTooltip);
}

export default {
  install,
  vTooltip,
};
