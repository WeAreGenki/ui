'use strict'; // eslint-disable-line

module.exports = {
  preset: '@wearegenki/test',

  // the setup and teardown happen in the global Jest config
  testEnvironment: '<rootDir>/lib/puppeteer/environment.js',
};
