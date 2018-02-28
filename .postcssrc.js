// https://github.com/michael-ciniawsky/postcss-load-config

'use strict';

module.exports = {
  plugins: {
    '@wearegenki/postcss-config': {},
  },
};

// TODO: Put this in the docs (both ways, depending on array or object type of config):

// https://github.com/michael-ciniawsky/postcss-load-config

// const { uiPostcssPreset } = require('@wearegenki/ui');

// module.exports = {
//   plugins: [
//     uiPostcssPreset({
//       // importPath: ['src'],
//       mixinsDir: 'src/css/mixins',
//       // verbose: true,
//     }),
//   ],
// };

// module.exports = {
//   plugins: {
//     '@wearegenki/postcss-config': {
//       // importPath: ['src'],
//       mixinsDir: 'src/css/mixins',
//       // verbose: true,
//     },
//   },
// };
