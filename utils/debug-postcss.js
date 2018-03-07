// FIXME: Move this functionality into @wearegenki/postcss-config

// https://github.com/andywer/postcss-debug#js-code

/* eslint-disable strict, no-console, import/no-extraneous-dependencies */

'use strict';

const fs = require('fs');
const postcss = require('postcss');
const postcssrc = require('postcss-load-config');
const { createDebugger } = require('postcss-debug');

const debug = createDebugger();

const ctx = {
  map: { inline: false },
  from: './packages/css/src/index.css',
  to: './packages/css/dist/index.css',
};

const css = fs.readFileSync(ctx.from, 'utf8');

postcssrc(ctx).then(({ plugins, options }) => {
  postcss(debug(plugins))
    .process(css, options)
    .then((result) => {
      result.warnings().forEach((warn) => {
        process.stderr.write(`${warn.toString()}\n`);
      });

      if (result.map) {
        fs.writeFile(`${result.opts.to}.map`, result.map.toString());
      }

      debug.inspect();
      console.info('\n-----------------------------------------\n');
      console.info(plugins);
      console.info('\n-----------------------------------------\n');
      console.info(result);
    })
    .catch((error) => {
      if (error.name === 'CssSyntaxError') {
        process.stderr.write(error.message + error.showSourceCode());
      } else {
        throw error;
      }
    });
});
