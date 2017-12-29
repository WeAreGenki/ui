// https://github.com/michael-ciniawsky/postcss-load-config

const path = require('path');

module.exports = {
  plugins: {
    'postcss-import': { path: ['packages/css/src'] },
    'postcss-at-rules-variables': {},
    'postcss-each': {},
    'postcss-mixins': {
      mixinsDir: [path.join(__dirname, 'packages/css/src/mixins')],
    },
    'postcss-nested': {},
    'postcss-custom-properties': {},
    'postcss-conditionals': {},
    'postcss-custom-media': {},
    // 'postcss-calc': { warnWhenCannotResolve: true },
    'postcss-calc': {},
    'postcss-color-function': {},
    'css-mqpacker': {},
    autoprefixer: { cascade: false, remove: false, grid: true },
  },
};
