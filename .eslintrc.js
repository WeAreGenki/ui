// https://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: 'babel-eslint',
    ecmaVersion: 2017,
    sourceType: 'module',
    ecmaFeatures: {
      experimentalObjectRestSpread: true
    },
  },
  env: {
    browser: true,
    'jest/globals': true
  },
  plugins: [
    'vue',
    'html',
    // 'compat',
    'jest',
  ],
  extends: [
    'airbnb-base',
    'plugin:import/errors',
    'plugin:vue/recommended',
    'plugin:jest/recommended',
  ],
  settings: {
    'import/resolver': {
      node: { extensions: ['.js', '.vue', '.marko', '.json'] }
    },
    'html/html-extensions': ['.html'], // don't lint *.vue files with html plugin, use vue plugin
  },
  rules: {
    'import/extensions': ['error', 'always', {
      js: 'never',
      vue: 'never',
      marko: 'never',
    }],
    // allow optionalDependencies
    'import/no-extraneous-dependencies': ['error', {
      optionalDependencies: ['test/unit/index.js']
    }],
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,

    // We Are Genki
    // 'compat/compat': 'warn', // find out which features need a polyfill
    'no-param-reassign': ['error', { props: false }],
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

    // // edit airbnb-base to remove ForOfStatement restriction
    // 'no-restricted-syntax': [
    //   'error',
    //   {
    //     selector: 'ForInStatement',
    //     message: 'for..in loops iterate over the entire prototype chain, which is virtually never what you want. Use Object.{keys,values,entries}, and iterate over the resulting array.',
    //   },
    //   {
    //     selector: 'LabeledStatement',
    //     message: 'Labels are a form of GOTO; using them makes code confusing and hard to maintain and understand.',
    //   },
    //   {
    //     selector: 'WithStatement',
    //     message: '`with` is disallowed in strict mode because it makes code impossible to predict and optimize.',
    //   },
    // ],

    // Vue
    // FIXME: Remove require-v-for-key once it's possible to ignore rules in <template> blocks
    'vue/require-v-for-key': 'off', // not strictly necessary BUT you need to know what you're doing
    'vue/name-property-casing': 'error', // default; PascalCase
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
