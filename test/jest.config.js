'use strict'; // eslint-disable-line

const path = require('path');

module.exports = {
  preset: '@wearegenki/test',
  rootDir: path.resolve(__dirname, '..'),
  coverageDirectory: '<rootDir>/test/coverage',

  // FIXME: This needs to be relative to each package
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
  },

  // FIXME: Need a way to separate out Vue, Marko, etc. test setups
  snapshotSerializers: ['<rootDir>/node_modules/jest-serializer-vue'],
  transform: {
    '^.+\\.js$': '<rootDir>/node_modules/babel-jest',
    '^.+\\.(marko)$':
      '<rootDir>/node_modules/@wearegenki/test/lib/marko/transform.js',
    '.*\\.(vue)$': '<rootDir>/node_modules/vue-jest',
  },
};
