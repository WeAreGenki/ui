/* eslint-disable prefer-template, prefer-destructuring, global-require */

// FIXME: Extract CSS from vue and put into postcss plugin

const path = require('path');
const fs = require('fs');
const version = require('../package.json').version;
const rollup = require('rollup');
const vue = require('rollup-plugin-vue');
const buble = require('rollup-plugin-buble');
const resolveNode = require('rollup-plugin-node-resolve');
const commonjs = require('rollup-plugin-commonjs');
// const uglify = require('uglify-js'); // TODO: Use UglifyJS 3 beta
// const CleanCSS = require('clean-css');
const postcss = require('rollup-plugin-postcss');
// const postcss = require('postcss');

const outputPath = path.resolve(__dirname, '../dist');

const inputOptions = {
  input: path.resolve(__dirname, '../src/entry.js'),
  // external,
  plugins: [
    resolveNode({ jsnext: true, browser: true }),
    commonjs(),
    vue({
      compileTemplate: true,
      css(styles, stylesNodes) { // eslint-disable-line no-unused-vars
        // write(path.resolve(__dirname, '../.components.postcss'), styles);
        // write(outputPath + '/components.postcss', styles);
        // postcss([
        //   require('postcss-import')({ path: ['src'] }),
        //   require('postcss-at-rules-variables')(),
        //   require('postcss-each')(),
        //   // require('postcss-mixins')(),
        //   require('postcss-nested')(),
        //   require('postcss-css-variables')(),
        //   require('postcss-conditionals')(),
        //   require('postcss-custom-media')(),
        //   require('postcss-calc')({ warnWhenCannotResolve: true }),
        //   // require('postcss-color-function')(),
        //   require('css-mqpacker')(),
        //   require('autoprefixer')(),
        //   require('postcss-clean')(),
        //   require('postcss-reporter')({ filter: msg => msg.type !== 'dependency' }),
        // ]).process(styles).then((css) => {
        //   write(outputPath + '/wag-grid.css', css);
        //   write(outputPath + '/wag-grid.min.css', new CleanCSS().minify(css).styles);
        // });
      },
    }),
    postcss({
      plugins: [
        require('postcss-import')({ path: ['src'] }),
        require('postcss-at-rules-variables')(),
        require('postcss-each')(),
        require('postcss-mixins')({ mixinsDir: path.join(__dirname, '../src/css/mixins') }),
        require('postcss-nested')(),
        require('postcss-css-variables')(),
        require('postcss-conditionals')(),
        require('postcss-custom-media')(),
        require('postcss-calc')({ warnWhenCannotResolve: true }),
        // require('postcss-color-function')(),
        require('css-mqpacker')(),
        require('autoprefixer')(),
        // require('postcss-clean')(),
        require('postcss-reporter')({ filter: msg => msg.type !== 'dependency' }),
      ],
      sourceMap: true, // true, "inline" or false
      extract: true,
      // FIXME: How to extract the CSS from vue components?
      // extensions: ['.css', '.vue'],
    }),
    buble(),
  ],
};

const outputOptions = {
  file: outputPath + '/wag-grid.js', // required with bundle.write
  // format: 'umd',
  format: 'cjs',
  // name: 'WagGrid',
  // globals,

  // paths,
  banner: '/*! wag-ui v' + version + ' | https://wearegenki.com/tools#FOSS */',
  // footer,
  // intro,
  // outro,
  // sourcemap,
  // sourcemapFile,
  // interop,

  // strict: false,
};

async function build() {
  // create a bundle
  const bundle = await rollup.rollup(inputOptions);

  // console.log(bundle.imports); // an array of external dependencies
  // console.log(bundle.exports); // an array of names exported by the entry point
  // console.log(bundle.modules); // an array of module objects

  // generate code and a sourcemap
  // const { code, map } = await bundle.generate(outputOptions);

  // console.log(code);

  // or write the bundle to disk
  await bundle.write(outputOptions);
}

build();


// rollup({
//   input: path.resolve(__dirname, '../src/index.js'),
//   plugins: [
//     resolve({
//       jsnext: true,
//       main: true,
//       browser: true,
//     }),
//     commonjs(),
//     postcss({
//       plugins: [
//         require('postcss-import')({ path: ['src'] }),
//         require('postcss-at-rules-variables')(),
//         require('postcss-each')(),
//         // require('postcss-mixins')(),
//         require('postcss-nested')(),
//         require('postcss-css-variables')(),
//         require('postcss-conditionals')(),
//         require('postcss-custom-media')(),
//         require('postcss-calc')({ warnWhenCannotResolve: true }),
//         // require('postcss-color-function')(),
//         require('css-mqpacker')(),
//         require('autoprefixer')(),
//         require('postcss-reporter')({ filter: msg => msg.type !== 'dependency' }),
//       ],
//       sourceMap: true, // true, "inline" or false
//       // extract: outputPath + '/wag-grid.css',
//     }),
//     vue({
//       compileTemplate: true,
//       css(styles, stylesNodes) { // eslint-disable-line no-unused-vars
//         write(outputPath + '/wag-grid.postcss', styles);
//         // postcss().process(styles, { from: outputPath + '/wag-grid.postcss', to: outputPath + '/wag-grid.css' }).then((css) => {
//         //   write(outputPath + '/wag-grid.css', css);
//         //   write(outputPath + '/wag-grid.min.css', new CleanCSS().minify(css).styles);
//         // });
//       },
//     }),
//     buble(),
//   ],
// })
//   .then((bundle) => {
//     const code = bundle.generate({
//       format: 'umd',
//       name: 'WagGrid',
//       strict: false,
//     }).code;
//     return write(outputPath + '/wag-grid.js', code).then(() => code);
//   })
//   .then((code) => {
//     const minified = uglify.minify(code, {
//       fromString: true,
//       output: {
//         ascii_only: true,
//       },
//     }).code;
//     return write(outputPath + '/wag-grid.min.js', minified);
//   })
//   .catch(logError);

function write(dest, code) {
  return new Promise(((resolve, reject) => {
    fs.writeFile(dest, code, (err) => {
      if (err) return reject(err);
      console.log(blue(dest) + ' ' + getSize(code));
      return resolve();
    });
  }));
}

function getSize(code) {
  return `${(code.length / 1024).toFixed(2)}kb`;
}

function logError(e) {
  console.log(e);
}

function blue(str) {
  return `\x1b[1m\x1b[34m${str}\x1b[39m\x1b[22m`;
}
