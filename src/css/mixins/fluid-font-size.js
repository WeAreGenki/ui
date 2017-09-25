/* Fluid font size (experimental) */
/* REF: https://www.smashingmagazine.com/2016/05/fluid-typography/ */

// font-size: calc( 12px + (24 - 12) * ( (100vw - 400px) / ( 800 - 400) ));

const baseFontSize = '16'; // px, browser default font size

function getUnit(value) {
  const match = value.match(/px|rem|em/);

  if (match) {
    return match.toString();
  }
  return null;
}

function remToPx(size) {
  return `${parseFloat(size) * baseFontSize}px`;
}

const fluidFontSize = (mixin, minFontSize, maxFontSize, fromScreenWidth, toScreenWidth) => {
  const minFont = getUnit(minFontSize) === 'rem' ? remToPx(minFontSize) : minFontSize;
  const maxFont = getUnit(maxFontSize) === 'rem' ? remToPx(maxFontSize) : maxFontSize;
  const minMedia = getUnit(fromScreenWidth) === 'em' ? remToPx(fromScreenWidth) : fromScreenWidth;
  const maxMedia = getUnit(toScreenWidth) === 'em' ? remToPx(toScreenWidth) : toScreenWidth;

  // console.log('minFontSize', minFontSize);
  // console.log('maxFontSize', maxFontSize);
  // console.log('minFont', minFont);
  // console.log('maxFont', maxFont);
  // console.log('minMedia', minMedia);
  // console.log('maxMedia', maxMedia);

  const fontRange = parseFloat(maxFont) - parseFloat(minFont);
  const mediaRange = parseFloat(maxMedia) - parseFloat(minMedia);
  const sizeCalc = `calc(${minFont} + (${fontRange}) * (100vw - ${minMedia}) / (${mediaRange}));`;

  return {
    '&': {
      [`@media screen and (max-width: ${minMedia})`]: {
        'font-size': minFont,
      },

      [`@media screen and (min-width: ${minMedia}) and (max-width: ${maxMedia})`]: {
        'font-size': sizeCalc,
      },

      [`@media screen and (min-width: ${maxMedia})`]: {
        'font-size': maxFont,
      },
    },
  };
};

module.exports = fluidFontSize;
