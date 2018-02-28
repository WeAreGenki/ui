'use-strict';

const isProduction = process.env.NODE_ENV === 'production';

module.exports = {
  extends: [
    'airbnb-base',
    'plugin:import/errors',
  ],
  plugins: [
    'html',
  ],
  parserOptions: {
    ecmaVersion: 5,
    sourceType: 'script',
  },
  settings: {
    'import/resolver': {
      node: { extensions: [
        '.js',
        '.json',
        '.marko',
        // '.vue', // TODO: Remove if unnecessary; should work via webpack's resolver anyway
      ]},
    },
    'html/html-extensions': ['.html', '.marko'], // not .vue; it has its own parser
  },
  rules: {
    'comma-dangle': ['error', {
      arrays: 'always-multiline',
      objects: 'always-multiline',
      imports: 'always-multiline',
      exports: 'always-multiline',
      functions: 'only-multiline', // optional awkward comma on multiline function params
    }],
    'import/extensions': ['error', 'always', {
      js: 'never',
      json: 'never',
      marko: 'never',
      vue: 'never',
    }],
    'no-debugger': isProduction ? 'error' : 'off',
    'no-param-reassign': ['error', {
      props: true,
      ignorePropertyModificationsFor: [
        'state', // vuex state
      ],
    }],
    'no-return-assign': ['error', 'except-parens'],
    'no-underscore-dangle': 'off',
    'object-curly-newline': ['error', { consistent: true }],
    'object-curly-spacing': ['error', 'always', { objectsInObjects: false }],
  },
};
