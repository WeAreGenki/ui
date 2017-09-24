// http://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: 'babel-eslint',
    ecmaVersion: 2017,
    ecmaFeatures: {
      experimentalObjectRestSpread: true
    },
    sourceType: 'module',
  },
  env: {
    browser: true,
  },
  plugins: [
    'vue',
  ],
  extends: [
    'airbnb-base',
    'plugin:import/errors',
    'plugin:vue/recommended',
  ],
  rules: {
    // don't require .vue extension when importing
    'import/extensions': ['error', 'always', {
      js: 'never',
      vue: 'never',
    }],
    // allow optionalDependencies
    'import/no-extraneous-dependencies': ['error', {
      optionalDependencies: ['test/unit/index.js']
    }],
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    // We Are Genki
    'no-underscore-dangle': 'off', // needed for PouchDB
    'no-use-before-define': 'off', // FIXME: Currently broken with destructuring
    'max-len': 'off', // FIXME: Currently broken with vue template blocks
    // 'max-len': ['error', {
    //   code: 120,
    //   tabWidth: 2,
    //   ignoreComments: true,
    //   ignoreTrailingComments: true,
    //   ignoreUrls: true,
    //   ignoreStrings: true,
    //   ignoreTemplateLiterals: true,
    // }],
    'object-curly-spacing': ['error', 'always', { objectsInObjects: false }],
    'object-curly-newline': ['error', { consistent: true }],
    // Vue
    // FIXME: Remove require-v-for-key once it's possible to ignore rules in <template> blocks
    'vue/require-v-for-key': 'off', // not strictly necessary BUT you need to know what you're doing
    'vue/name-property-casing': ['error', 'kebab-case'], // same as in official repos
    'vue/max-attributes-per-line': 'off', // easier to read in a single line
    'vue/no-dupe-keys': 'error',
    'vue/no-reserved-keys': 'error',
    'vue/no-shared-component-data': 'error',
    'vue/no-template-key': 'error',
    'vue/require-render-return': 'error',
    'vue/require-valid-default-prop': 'error',
    'vue/return-in-computed-property': 'error',
    'vue/html-self-closing': 'error',
    // 'vue/html-end-tags': 'error', // TODO: Currently broken: https://github.com/vuejs/eslint-plugin-vue/issues/160
    'vue/no-async-in-computed-properties': 'error',
    'vue/no-duplicate-attributes': 'error',
    'vue/no-side-effects-in-computed-properties': 'error',
    'vue/order-in-components': 'error',
    'vue/require-default-prop': 'error',
    'vue/require-prop-types': 'error',
    'vue/this-in-template': 'error',
    'vue/attribute-hyphenation': 'error',
    'vue/html-quotes': 'error',
    'vue/mustache-interpolation-spacing': 'error',
    'vue/no-multi-spaces': 'error',
    'vue/v-bind-style': 'error',
    'vue/v-on-style': 'error',
  }
};
