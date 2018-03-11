/**
 * ESLint preset to accompany our test suite; @wearegenki/test
 */

'use strict'; // eslint-disable-line

module.exports = {
  root: false, // this should extend the developer's project root config OR another preset
  extends: ['plugin:jest/recommended'],
  parserOptions: {
    ecmaVersion: 9,
    sourceType: 'module',
  },
  env: {
    jest: true,
  },
  globals: {
    browser: true,
    expectPage: true,
    page: true,
  },
  plugins: ['jest'],
  rules: {
    'import/no-extraneous-dependencies': ['error', {
      devDependencies: true,
      peerDependencies: true,
    }],
  },
};
