/**
 * ESLint preset to accompany our test suite; @wearegenki/test
 */

'use strict'; // eslint-disable-line

module.exports = {
  root: false, // this should extend the developer's project root config
  extends: ['plugin:jest/recommended'],
  parserOptions: {
    ecmaVersion: 9,
    sourceType: 'module',
  },
  env: {
    // browser: true,
    jest: true,
    // 'jest/globals': true,
    // node: true,
  },
  globals: {
    browser: true,
    expectPage: true,
    page: true,
  },
  plugins: ['jest'],
  // settings: {
  //   rules: {
  //     'import/no-extraneous-dependencies': ['error', {
  //       optionalDependencies: [
  //         'test/unit/index.js',
  //         'test/index.js',
  //       ],
  //     }],
  //   },
  // },
};
