// https://github.com/michael-ciniawsky/postcss-load-config

'use strict';

module.exports = {
  plugins: {
    '@wearegenki/postcss-config': {
      // importPath: ['src'], // you only need to uncomment if changing the default
      mixinsDir: 'src/css/mixins',
      // verbose: true, // shows additional CSS build debugging info
    },
  },
};

//////////////////////////////////////////////////////////////////////////////////

// OR you can use this style:

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
