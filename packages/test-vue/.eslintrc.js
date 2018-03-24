// https://eslint.org/docs/user-guide/configuring

'use strict';

module.exports = {
  extends: [
    '@wearegenki/eslint-config/vue',
    '@wearegenki/eslint-config/jest', // XXX: Should always be last
  ],
};
