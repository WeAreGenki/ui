'use-strict';

const path = require('path');
const postcss = require('postcss');
const cssImport = require('postcss-import');
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
const cssstats = require('cssstats');

const mixinsPath = path.join(
  path.dirname(require.resolve('@wearegenki/css')),
  'src/mixins',
);

// PostCSS presets plugin
module.exports.default = postcss.plugin('postcss-config', (opts = {}) => {
  const mixinsDir = opts.mixinsDir ? [opts.mixinsDir] : [];
  mixinsDir.push(mixinsPath);

  return postcss()
    .use(cssImport({ path: opts.importPath || ['src'] }))
    .use(atVariables)
    .use(each)
    .use(mixins({ mixinsDir }))
    .use(nested)
    .use(customProperties)
    .use(conditionals)
    .use(customMedia)
    .use(calc({ warnWhenCannotResolve: opts.verbose }))
    .use(colorFunction)
    .use(mediaQueryPacker)
    .use(autoprefixer({ remove: false, flexbox: 'no-2009' }))
    .use(url);
});

// generate stats about the CSS
// REF: https://github.com/cssstats/core
// FIXME: Finish this implementation and write a usage guide
module.exports.stats = function getStats(css) {
  postcss()
    .use(cssstats) // TODO: If this doesn't work then use cssstats()
    .process(css)
    .then((result) => {
      result.messages.forEach((message) => {
        console.log(message); // eslint-disable-line no-console
      });
    });
};
