/**
 * ESLint preset to accompany our test suite; @wearegenki/test
 */

module.exports = {
  root: false, // this should extend the developer's project root config
  extends: ['plugin:jest/recommended'],
  parserOptions: {
    ecmaVersion: 8,
    sourceType: 'module',
  },
  env: {
    browser: true,
    jest: true,
    'jest/globals': true,
  },
  plugins: ['jest'],
  settings: {
    rules: {
      'import/no-extraneous-dependencies': ['error', {
        optionalDependencies: [
          'test/unit/index.js',
          'test/index.js',
        ],
      }],
    },
  },
  rules: {
    'no-console': 'off',
  },
};
