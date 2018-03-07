'use strict'; // eslint-disable-line

// const markoCompiler = require('marko/compiler');
// const raptorRenderer = require('raptor-renderer');

// /**
//  * Compile a Marko component for testing.
//  * @param {MarkoComponent} component The Marko component to render.
//  * @param {object} [data] Input data to pass to the component at runtime.
//  * @returns {object} The rendered component.
//  */
// function renderMarkoComponent(component, data = {}) {
//   // const result = component.renderSync(data);
//   // result.appendTo(document.body);
//   // return result.getComponent();

//   console.log('!@!@ COMPONENT', component);

//   // console.log('!@!@ 0000', typeof component.renderer, component.renderer, component);
//   // console.log('!@!@ 1111', typeof component._, component._, component);

//   // const result = raptorRenderer.render(component.renderer, data);
//   // const RenderResult = raptorRenderer.render(component._, data);
//   // const RenderResult = raptorRenderer.render(component, data);


//   const RenderResult = component.renderSync(data);

//   console.log('!@!@ 2222', RenderResult);

//   return RenderResult;
// }

// // // // // // // // // // // // // // // // // // // // // // // // // // //

const server = {
  start() {
    // x
  },
  end() {
    // x
  },
};

function attachComponent(component, el, data = {}) {
  // const renderResult = component.renderSync(data);

  // const output = renderResult.getOutput();
  // let html;

  // if (output.actualize) {
  //   const docFragment = output.actualize(document);

  //   // generate html from childNodes
  //   html = '';
  //   if (docFragment.hasChildNodes()) {
  //     const children = docFragment.childNodes;
  //     for (let i = 0; i < children.length; i++) {
  //       html += children[i].outerHTML;
  //     }
  //   }
  // } else {
  //   html = output.toString();
  // }

  // renderResult.html = html;

  // console.log('@!@!@!', renderResult);
  // return renderResult;

  // const template = require('marko').load(require.resolve('./my-template.marko'));
}

module.exports = {
  // renderMarkoComponent,

  server,
  attachComponent,
};
