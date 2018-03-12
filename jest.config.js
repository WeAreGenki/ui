'use strict'; // eslint-disable-line

const preset = require('@wearegenki/test/jest-preset'); // eslint-disable-line import/no-extraneous-dependencies

module.exports = {
  preset: '@wearegenki/test',
  projects: [
    // XXX: Manually list each package until they all have tests then use a glob to match
    // '<rootDir>/packages/*',
    '<rootDir>/packages/test',
    {
      displayName: 'test',

      testPathIgnorePatterns: [
        ...preset.testPathIgnorePatterns,
        '<rootDir>/packages/*',
      ],
    },
  ],
};
