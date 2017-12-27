// https://github.com/michael-ciniawsky/postcss-load-config

// TODO: Create a new package with our PostCSS packages + config
//  ↳ @wearegenki/ui-postcss

const path = require('path');

module.exports = {
  plugins: {
    // 'postcss-use': {
    //   modules: ['postcss-import', '*'],
    //   options: {
    //     'postcss-import': { path: ['src'] },
    //   },
    // },
    'postcss-import': { path: ['src'] },
    'postcss-at-rules-variables': {},
    'postcss-each': {},
    'postcss-mixins': { mixinsDir: path.join(__dirname, 'src/css/mixins') },
    'postcss-nested': {},
    'postcss-custom-properties': {},
    'postcss-conditionals': {},
    'postcss-custom-media': {},
    'postcss-calc': { warnWhenCannotResolve: true },
    'postcss-color-function': {},
    // 'css-mqpacker': { sort: true }, // TODO: Experiment with media query order, is it correct without this?
    'css-mqpacker': {},
    autoprefixer: { cascade: false, remove: false, grid: true },
  },
};
