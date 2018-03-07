'use strict'; // eslint-disable-line

module.exports = {
  preset: '@wearegenki/test',
  rootDir: '..',
  coverageDirectory: '<rootDir>/test/coverage',

  // FIXME: This needs to be relative to each package
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
  },

  snapshotSerializers: ['<rootDir>/node_modules/jest-serializer-vue'],
  transform: {
    '^.+\\.js$': '<rootDir>/node_modules/babel-jest',
    '^.+\\.(marko)$':
      '<rootDir>/node_modules/@wearegenki/test/lib/marko/transform.js',
    '.*\\.(vue)$': '<rootDir>/node_modules/vue-jest',
  },
};
