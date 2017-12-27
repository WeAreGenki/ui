// https://github.com/andywer/postcss-debug#js-code

/* eslint-disable */

const fs = require('fs');
const path = require('path');
const postcss = require('postcss');
const { createDebugger, matcher } = require('postcss-debug');

const debug = createDebugger();
// // or limit gathering debug data to certain css files only:
// const debug = createDebugger([
//   matcher.contains('style/some-file.css'),
//   matcher.regex(/foo\.css/)
// ])


const plugins = [
  require('postcss-import')({ path: ['src', 'node_modules'] }),
  require('postcss-at-rules-variables'),
  require('postcss-each'),
  require('postcss-mixins')({
    mixinsDir: [path.join(__dirname, 'src/css/mixins')],
  }),
  require('postcss-nested'),
  require('postcss-css-variables'),
  require('postcss-conditionals'),
  require('postcss-custom-media'),
  require('postcss-calc')({ warnWhenCannotResolve: true }),
  require('postcss-color-function'),
  require('css-mqpacker'),
  require('autoprefixer')({ remove: false }),
];

const opts = {
  from: './src/css/main.css',
  to: './lib/index.css',
};

postcss(debug(plugins))
  .process(fs.readFileSync(opts.from, 'utf-8'), opts)
  .then(result => { debug.inspect(); });
