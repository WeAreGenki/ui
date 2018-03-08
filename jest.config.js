'use strict'; // eslint-disable-line

module.exports = {
  preset: '@wearegenki/test',

  // TODO: Can we get away with not using puppeteer? Or maybe just use it for
  // more e2e style test? The performance cost can be a bit much for this type
  // of repo where there's a lot of small tests.
  globalSetup: '<rootDir>/packages/test/lib/puppeteer/setup.js',
  globalTeardown: '<rootDir>/packages/test/lib/puppeteer/teardown.js',
  // testEnvironment: '<rootDir>/packages/test/lib/puppeteer/environment.js',

  // FIXME: This needs to be relative to each package
  // moduleNameMapper: {
  //   '^@/(.*)$': '<rootDir>/src/$1',
  // },

  // FIXME: Need a way to separate out Vue, Marko, etc. test setups
  // snapshotSerializers: ['<rootDir>/node_modules/jest-serializer-vue'],
  // transform: {
  //   '^.+\\.js$': '<rootDir>/node_modules/babel-jest',
  //   '^.+\\.(marko)$':
  //     '<rootDir>/packages/test/lib/marko/transform.js',
  //   '.*\\.(vue)$': '<rootDir>/node_modules/vue-jest',
  // },

  projects: [
    // '<rootDir>',
    '<rootDir>/packages/test',
    //   // '<rootDir>/packages/*',
    //   {
    //     displayName: 'test',

    //     // TODO: Can we get away with not using puppeteer? Or maybe just use it for
    //     // more e2e style test? The performance cost can be a bit much for this type
    //     // of repo where there's a lot of small tests.
    //     // globalSetup: '<rootDir>/packages/test/lib/puppeteer/setup.js',
    //     // globalTeardown: '<rootDir>/packages/test/lib/puppeteer/teardown.js',
    //     // testEnvironment: '<rootDir>/packages/test/lib/puppeteer/environment.js',
    //   },
  ],
};
