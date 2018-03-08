'use strict'; // eslint-disable-line

// const path = require('path');

module.exports = {
  preset: '@wearegenki/test',
  // rootDir: __dirname,
  // transform: {},

  // TODO: Can we get away with not using puppeteer? Or maybe just use it for
  // more e2e style test? The performance cost can be a bit much for this type
  // of repo where there's a lot of small tests.
  // globalSetup: '<rootDir>/lib/puppeteer/setup.js',
  // globalTeardown: '<rootDir>/lib/puppeteer/teardown.js',
  testEnvironment: '<rootDir>/lib/puppeteer/environment.js',
};
