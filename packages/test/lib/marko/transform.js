'use strict';

const crypto = require('crypto');
const fs = require('fs');
const markoCompiler = require('marko/compiler');

/**
 * This Transform intercepts all '.marko' required files and compiles them for the browser, so Jest
 * can run them on the server using Jest or jsdom. Normally you need a package bundler to do this
 * as Marko needs to compile the templates in order to run them in a browser context. This file handles
 * on the fly compiling of each .marko file. It also handles caching properly so that changes made to
 * marko files get properly flushed.
 */
module.exports = {
  canInstrument: true,
  process(source, filePath) {
    const compiled = markoCompiler.compileForBrowser(source, filePath, {
      writeToDisk: false,
    });

    return compiled.code;
  },
  getCacheKey: (fileData, filename, configString, options) => {
    const file = fs.readFileSync(__filename);

    return crypto
      .createHash('md5')
      .update(file)
      .update(fileData + filename + configString)
      .update(options && options.instrument ? 'instrument' : '')
      .digest('hex');
  },
};
