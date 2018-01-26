// extra settings for Vue components

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
