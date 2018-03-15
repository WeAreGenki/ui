// https://stylelint.io/user-guide/configuration/

'use strict';

module.exports = {
  extends: '@wearegenki/stylelint-config',

  rules: {
    // 'selector-max-id': null, // fine for performance IF you know what you're doing
    'string-no-newline': null, // FIXME: Is currently throwing false positives
  },
};
