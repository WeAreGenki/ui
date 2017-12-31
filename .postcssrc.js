module.exports = {
  plugins: {
    '@wearegenki/ui-postcss': {},
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
//     '@wearegenki/ui-postcss': {
//       // importPath: ['src'],
//       mixinsDir: 'src/css/mixins',
//       // verbose: true,
//     },
//   },
// };
