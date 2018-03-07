// extra settings for Marko components

'use strict'; // eslint-disable-line

module.exports = {
  extends: [
    '@wearegenki/eslint-config',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
  env: {
    browser: true,
  },
};
