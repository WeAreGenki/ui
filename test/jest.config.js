'use strict'; // eslint-disable-line

const path = require('path');

// const libDir = '<rootDir>/packages/test/lib';
const puppeteer = {
  globalSetup: '<rootDir>/packages/test/lib/puppeteer/setup.js',
  globalTeardown: '<rootDir>/packages/test/lib/puppeteer/teardown.js',
  testEnvironment: '<rootDir>/packages/test/lib/puppeteer/environment.js',
};

module.exports = {
  preset: '@wearegenki/test',
  rootDir: path.resolve(__dirname, '..'),
  coverageDirectory: '<rootDir>/test/coverage',

  // resolver: `${libDir}/resolver.js`,
  // transform: {
  //   // '^.+\\.jsx?$': 'babel-jest', // don't use babel to transpile
  //   // '^.+\\.(html|marko)$': `${libDir}/transform.js`,
  // },
  // browser: true, // use browser field in package.json

  // projects: ['<rootDir>', '<rootDir>/packages/*'],
  projects: [
    '<rootDir>',
    '<rootDir>/packages/*',
    // {
    //   displayName: 'root',
    // },
    {
      // displayName: '@wearegenki/test',
      testMatch: ['<rootDir>/packages/test/__tests__/*.js'],
      ...puppeteer,
    },
  ],
};
