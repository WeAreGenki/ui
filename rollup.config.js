// REF: http://vuejs.github.io/rollup-plugin-vue/#/en/2.3/
// REF: https://github.com/rollup/rollup-plugin-commonjs
// REF: https://github.com/rollup/rollup-plugin-node-resolve
// REF: https://github.com/rollup/rollup-plugin-alias

import alias from 'rollup-plugin-alias';
import vue from 'rollup-plugin-vue';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import pkg from './package.json';

const banner = `/*!
* @wearegenki/ui v${pkg.version} (${pkg.homepage})
* Copyright 2017-${new Date().getFullYear()} ${pkg.author}
* Licensed under Apache-2.0 (https://github.com/WeAreGenki/ui/blob/master/LICENSE)
*/`;

// FIXME: Iterate over each component, process, and output render function to it's own directory (?) in ./lib

export default [
  {
    input: 'src/main.js',
    output: [
      { file: pkg.main, format: 'es' },
    ],
    external: ['vue', 'vuex'],
    name: 'howLongUntilLunch',
    sourcemap: true,
    plugins: [
      alias({
        resolve: ['.js', '.vue', '.marko'],
        '@/': 'src/components-vue/',
      }),
      vue(),
      resolve({
        browser: true,
        // preferBuiltins: true,
      }),
      commonjs({ exclude: 'src/**' }),
    ],
    banner,
  },
];
