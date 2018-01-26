'use strict';

const fs = require('fs');

const tmpDirExists = fs.existsSync('/tmp/');

module.exports = {
  cache: true,
  extends: '@wearegenki/stylelint-config',

  // use in-memory cache for better performance
  ...(tmpDirExists ? { cacheLocation: '/tmp/' } : {}),
};
