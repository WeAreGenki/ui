// https://eslint.org/docs/user-guide/configuring

'use strict';

module.exports = {
  extends: [
    '@wearegenki/eslint-config/vue',
  ],
  // workaround for strange error: "unable to load resolver webpack"
  settings: {
    'import/resolver': 'node',
  },
};
