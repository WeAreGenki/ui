'use strict'; // eslint-disable-line

const presetConfig = require('@wearegenki/test/jest-preset'); // eslint-disable-line import/no-extraneous-dependencies

module.exports = {
  preset: '@wearegenki/test',
  globalSetup: 'jest-environment-puppeteer/setup',
  globalTeardown: 'jest-environment-puppeteer/teardown',

  // FIXME: This needs to be relative to each package
  // moduleNameMapper: {
  //   '^@/(.*)$': '<rootDir>/src/$1',
  // },

  // FIXME: Need a way to separate out Vue, Marko, and Node test setups (?)
  snapshotSerializers: ['<rootDir>/node_modules/jest-serializer-vue'],
  transform: {
    '^.+\\.js$': '<rootDir>/node_modules/babel-jest',
    '^.+\\.(marko)$': '<rootDir>/packages/test/lib/marko/transform.js',
    '.*\\.(vue)$': '<rootDir>/node_modules/vue-jest',
  },

  projects: [
    // XXX: Manually list each package until they all have tests then use a glob to match
    // '<rootDir>/packages/*',
    '<rootDir>/packages/test',
    {
      displayName: 'test',

      testPathIgnorePatterns: [
        ...presetConfig.testPathIgnorePatterns,
        '<rootDir>/packages/*',
      ],
    },
  ],
};
