// REF: http://vuejs.github.io/rollup-plugin-vue/#/en/2.3/
// REF: https://github.com/rollup/rollup-plugin-commonjs
// REF: https://github.com/rollup/rollup-plugin-node-resolve

import vue from 'rollup-plugin-vue';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
// import postcss from 'rollup-plugin-postcss'; // TODO: Try to avoid using this if possible and use only vue
// import babel from 'rollup-plugin-babel';
// import purgecss from 'rollup-plugin-purgecss'; // TODO: Use this
import pkg from './package.json';

export default [
  // browser-friendly UMD build
  {
    input: 'src/main.js',
    output: {
      file: pkg.browser,
      format: 'umd',
    },
    // external = ['vue', 'vuex'],
    name: 'howLongUntilLunch',
    sourcemap: true,
    plugins: [
      vue(),
      resolve({
        browser: true,
        // preferBuiltins: true,
      }),
      commonjs({ exclude: 'src/**' }),
      // babel({
      //   exclude: 'node_modules/**', // only transpile our source code
      //   externalHelpersWhitelist: [ // include only required helpers
      //     'defineProperties',
      //     'createClass',
      //     'inheritsLoose',
      //     'extends',
      //   ],
      // }),
      // purgecss({
      //   content: ['index.html']
      // }),
    ],
    banner: `/*!
* @wearegenki/ui v${pkg.version} (${pkg.homepage})
* Copyright 2017-${new Date().getFullYear()} ${pkg.author}
* Licensed under Apache-2.0 (https://github.com/WeAreGenki/ui/blob/master/LICENSE)
*/`,
  },

  // CommonJS (for Node) and ES module (for bundlers) build.
  // (We could have three entries in the configuration array
  // instead of two, but it's quicker to generate multiple
  // builds from a single configuration where possible, using
  // an array for the `output` option, where we can specify
  // `file` and `format` for each target)
  {
    input: 'src/main.js',
    external: ['ms'],
    output: [
      { file: pkg.main, format: 'cjs' },
      { file: pkg.module, format: 'es' },
    ],
    sourcemap: true,
  },
];
