'use strict';

const fs = require('fs');

const tmpDirExists = fs.existsSync('/tmp/');

module.exports = {
  extends: '@wearegenki/stylelint-config',

  // in-memory cache for better performance
  cache: true,
  cacheLocation: tmpDirExists ? '/tmp/' : false,

  rules: {
    'selector-max-id': null, // fine for performance IF you know what you're doing
  },
};
