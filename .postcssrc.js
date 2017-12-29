// https://github.com/michael-ciniawsky/postcss-load-config

// const { uiPostcssPreset } = require('@wearegenki/ui');

// module.exports = {
//   plugins: [
//     uiPostcssPreset({
//       // importPath: ['src'],
//       // mixinsDir: 'src/css/mixins',
//       // verbose: true,
//     }),
//   ],
// };

module.exports = {
  plugins: {
    '@wearegenki/ui-postcss': {
      // importPath: ['src'],
      // mixinsDir: 'src/css/mixins',
      // verbose: true,
    },
  },
};
