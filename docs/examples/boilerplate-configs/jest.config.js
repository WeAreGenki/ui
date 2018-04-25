// https://facebook.github.io/jest/docs/en/configuration.html

'use strict'; // eslint-disable-line

module.exports = {
  preset: '@wearegenki/test',
  // preset: '@wearegenki/test-vue',

  coverageThreshold: {
    global: {
      branches: 0,
      functions: 0,
      lines: 0,
      statements: 0,
    },
  },
};
