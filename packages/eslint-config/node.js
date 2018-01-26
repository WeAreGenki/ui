// extra settings for node modules

module.exports = {
  extends: [
    '@wearegenki/eslint-config',
  ],
  parserOptions: {
    ecmaVersion: 6,
  },
  env: {
    browser: false,
    es6: true,
    node: true,
  },
  rules: {
    strict: 'off',
  },
};
