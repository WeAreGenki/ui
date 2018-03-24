// https://facebook.github.io/jest/docs/en/configuration.html

'use strict'; // eslint-disable-line

module.exports = {
  preset: '@wearegenki/test',
  // preset: '@wearegenki/test-vue',
  // preset: '@wearegenki/test-marko',

  coverageThreshold: {
    global: {
      branches: 0,
      functions: 0,
      lines: 0,
      statements: 0,
    },
  },
};
