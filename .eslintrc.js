// https://eslint.org/docs/user-guide/configuring

const isProduction = process.env.NODE_ENV === 'production';

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
  },
  plugins: [
    'vue',
    'html',
    // 'compat',
  ],
  extends: [
    'airbnb-base',
    'plugin:import/errors',
    'plugin:vue/recommended',
  ],
  settings: {
    'import/resolver': {
      node: { extensions: ['.js', '.vue', '.marko', '.json'] }
    },
    'html/html-extensions': ['.html'], // only lint .html files with this plugin not .vue
  },
  rules: {
    'import/extensions': ['error', 'always', {
      js: 'never',
      vue: 'never',
      marko: 'never',
    }],
    'no-param-reassign': ['error', {
      props: true,
      ignorePropertyModificationsFor: [
        'state', // vuex state
      ]
    }],
    'import/no-extraneous-dependencies': ['error', {
      optionalDependencies: ['test/unit/index.js']
    }],
    'no-debugger': isProduction ? 'error' : 'off',
    // 'compat/compat': 'warn', // find out which features need a polyfill
    'no-underscore-dangle': 'off', // needed for @wearegenki/db
    'max-len': 'off', // FIXME: Currently broken with .vue template blocks
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
    // FIXME: Remove require-v-for-key once it's possible to ignore rules in <template> blocks
    'vue/require-v-for-key': 'off', // not strictly necessary BUT you need to know what you're doing
    'vue/max-attributes-per-line': 'off', // easier to read in a single line
  }
};
