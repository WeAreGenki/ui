/**
 * XXX: Customised PostCSS build configuration for standalone builds. When using
 *  a JavaScript bundler you typically don't need many of these options as your
 *  bundler will take care of these things — you can use a simpler configuration
 *  like the the commented out example below.
 *
 * XXX: "@wearegenki/ui-postcss" is installed as a dependency of "@wearegenki/ui".
 */

const isProduction = process.env.NODE_ENV === 'production';

module.exports = {
  map: { inline: !isProduction }, // create an external source map in production builds
  plugins: {
    '@wearegenki/ui-postcss': {
      mixinsDir: 'src/css/mixins', // Optional, if you're using custom mixins
    },
    cssnano: isProduction ? {} : false, // optimise CSS in production builds
  },
};

// ---------------------------------------------------------------------------- //

// XXX: Use this simple configuration when using a JS bundler like Webpack:

// module.exports = {
//   plugins: {
//     '@wearegenki/ui-postcss': {
//       mixinsDir: 'src/css/mixins', // Optional, if you're using custom mixins
//     },
//   },
// };
