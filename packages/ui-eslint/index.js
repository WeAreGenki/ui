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
    ecmaVersion: 8,
    sourceType: 'module',
  },
  settings: {
    'import/resolver': {
      node: { extensions: [
        '.js',
        '.json',
        '.marko',
        '.vue',
      ]},
    },
    'html/html-extensions': ['.html', '.marko'], // not .vue; it has its own parser
  },
  rules: {
    'import/extensions': ['error', 'always', {
      js: 'never',
      json: 'never',
      marko: 'never',
      vue: 'never',
    }],
    'no-param-reassign': ['error', {
      props: true,
      ignorePropertyModificationsFor: [
        'state', // vuex state
      ],
    }],
    'no-debugger': isProduction ? 'error' : 'off',
    'no-underscore-dangle': 'off',
    'object-curly-spacing': ['error', 'always', { objectsInObjects: false }],
    'object-curly-newline': ['error', { consistent: true }],
    'comma-dangle': ['error', {
      arrays: 'always-multiline',
      objects: 'always-multiline',
      imports: 'always-multiline',
      exports: 'always-multiline',
      functions: 'only-multiline', // optional awkward comma on multiline function params
    }],
  },
};
