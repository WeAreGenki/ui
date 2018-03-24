'use strict'; // eslint-disable-line

const path = require('path');
const postcss = require('postcss');
const atImport = require('postcss-import');
const atVariables = require('postcss-at-rules-variables');
const each = require('postcss-each');
const mixins = require('postcss-mixins');
const nested = require('postcss-nested');
const customProperties = require('postcss-custom-properties');
const conditionals = require('postcss-conditionals');
const customMedia = require('postcss-custom-media');
const calc = require('postcss-calc');
const colorFunction = require('postcss-color-function');
const mediaQueryPacker = require('css-mqpacker');
const autoprefixer = require('autoprefixer');
const url = require('postcss-url');

/** PostCSS configuration preset. */
module.exports = postcss.plugin('postcss-config', (opts = {}) => {
  if (opts.minimal) {
    // reduced features version
    return postcss()
      .use(atImport)
      .use(nested)
      .use(customMedia)
      .use(autoprefixer);
  }

  const mixinsDir = [];

  if (!opts.standalone) {
    mixinsDir.push(path.join(
      path.dirname(require.resolve('@wearegenki/css')),
      'src/mixins'
    ));

    if (opts.mixinsDir) {
      mixinsDir.push(opts.mixinsDir);
    }
  }

  // default full featured version
  return postcss()
    .use(atImport({ path: opts.importPath || ['src'] }))
    .use(atVariables)
    .use(each)
    .use(mixins({ mixinsDir }))
    .use(nested)
    .use(customProperties({ preserve: false, warnings: opts.verbose }))
    .use(conditionals)
    .use(customMedia)
    .use(calc({ warnWhenCannotResolve: opts.verbose }))
    .use(colorFunction)
    .use(mediaQueryPacker)
    .use(autoprefixer({ remove: false, flexbox: 'no-2009' }))
    .use(url);
});
