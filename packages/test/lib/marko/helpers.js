'use strict'; // eslint-disable-line

/**
 * Compile a Marko component for testing.
 * @param {MarkoComponent} component The Marko component to render.
 * @param {object} [data] Input data to pass to the component at runtime.
 * @returns {object} The rendered component.
 */
function renderMarkoComponent(component, data = {}) {
  const result = component.renderSync(data);
  result.appendTo(document.body);
  return result.getComponent();
}

module.exports = {
  renderMarkoComponent,
};
