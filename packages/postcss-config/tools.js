'use-strict';

const postcss = require('postcss');
const cssstats = require('cssstats');

// FIXME: Finish this implementation and write a usage guide
/**
 * Generate statistics about input CSS.
 * @see https://github.com/cssstats/core
 * @param {string} css The CSS to evaluate.
 */
function getStats(css) {
  postcss()
    .use(cssstats) // TODO: If this doesn't work then use cssstats()
    .process(css)
    .then((result) => {
      result.messages.forEach((message) => {
        console.log(message);
      });
    });
}

module.exports = {
  getStats,
};
