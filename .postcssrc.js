// https://github.com/michael-ciniawsky/postcss-load-config

const path = require('path');

module.exports = {
  plugins: {
    'postcss-import': { path: ['src'] },
    'postcss-at-rules-variables': {},
    'postcss-each': {},
    'postcss-mixins': { mixinsDir: path.join(__dirname, 'src/css/mixins') },
    'postcss-nested': {},
    'postcss-css-variables': {},
    'postcss-conditionals': {},
    'postcss-custom-media': {},
    'postcss-calc': { warnWhenCannotResolve: true },
    // 'postcss-color-function': {},
    'css-mqpacker': {},
    'autoprefixer': { remove: false },
    // 'postcss-clean': {},
    'postcss-reporter': { filter: msg => msg.type !== 'dependency' },
  }
};
