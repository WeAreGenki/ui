'use-strict';

module.exports = {
  root: true,
  extends: [
    '@wearegenki/eslint-config/vue',
  ],
  settings: {
    rules: {
      'import/no-extraneous-dependencies': ['error', {
        optionalDependencies: ['test/unit/index.js'],
      }],
    },
  },
};
