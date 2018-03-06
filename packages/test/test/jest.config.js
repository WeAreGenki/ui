'use strict'; // eslint-disable-line

const path = require('path');

module.exports = {
  preset: '@wearegenki/test',
  rootDir: path.resolve(__dirname, '../../..'),
  coverageDirectory: '<rootDir>/test/coverage',

  // use puppeteer
  globalSetup: '<rootDir>/packages/test/lib/puppeteer/setup.js',
  globalTeardown: '<rootDir>/packages/test/lib/puppeteer/teardown.js',
  testEnvironment: '<rootDir>/packages/test/lib/puppeteer/environment.js',
};
