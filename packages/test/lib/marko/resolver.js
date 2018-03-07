'use strict';  // eslint-disable-line

const resolve = require('browser-resolve'); // eslint-disable-line

module.exports = function resolver(file, options) {
  const resv = options.browser
    ? resolve
    : require('resolve');  // eslint-disable-line

  let filepath = resv.sync(file, {
    basedir: options.basedir,
    extensions: options.extensions,
    moduleDirectory: options.moduleDirectory,
    paths: options.paths,
  });

  /**
   * Unfortunately, at this point marko files that use a package.json with a remapping of files
   * via the "browser" property have been ignored. The best I can find is that the use of "sync"
   * instead of "aynsc" by Jest results in a completely different resolution path for modules
   * using this technique. The only thing I have found to work is to run the resolved path through
   * the resolver a second time, without a relative path, and then it finally applies the transform
   *
   * I have open tickets with Jest and node-resolve trying to get to the bottom of these difference,
   * but so far I've had no response.
   *
   * jest ticket https://github.com/facebook/jest/issues/4756
   * resolve ticket https://github.com/browserify/resolve/issues/142
   *
   */
  // restricting the second pass to only marko modules as, for now, it is the only module which
  // provides browser overrides within a package.json
  if (filepath.indexOf('marko') > -1) {
    try {
      filepath = resv.sync(filepath, {
        filename: filepath,
      });
    } catch (err) {
      console.log('\n ERROR SECOND PASS: ', file, filepath, err.message);
    }
  }

  return filepath;
};
