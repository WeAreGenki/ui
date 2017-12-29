'use-strict';

const path = require('path');
const postcss = require('postcss');
const cssImport = require('postcss-import');
const atRulesVars = require('postcss-at-rules-variables');
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

const mixinsPath = path.join(
  path.dirname(require.resolve('@wearegenki/css')),
  'src/mixins',
);

module.exports = postcss.plugin('ui-postcss', (opts = {}) => {
  const mixinsDir = opts.mixinsDir ? [opts.mixinsDir] : [];
  mixinsDir.push(mixinsPath);

  return postcss()
    .use(cssImport({ path: opts.importPath || ['src'] }))
    .use(atRulesVars)
    .use(each)
    .use(mixins({ mixinsDir }))
    .use(nested)
    .use(customProperties)
    .use(conditionals)
    .use(customMedia)
    .use(calc({ warnWhenCannotResolve: opts.verbose }))
    .use(colorFunction)
    .use(mediaQueryPacker)
    .use(autoprefixer({ cascade: false, remove: false, grid: true }));
});
