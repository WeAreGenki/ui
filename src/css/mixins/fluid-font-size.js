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
  const min = getUnit(minFontSize) === 'rem' ? remToPx(minFontSize) : minFontSize;
  const max = getUnit(maxFontSize) === 'rem' ? remToPx(maxFontSize) : maxFontSize;
  const fromWidth = getUnit(fromScreenWidth) === 'em' ? remToPx(fromScreenWidth) : fromScreenWidth;
  const toWidth = getUnit(toScreenWidth) === 'em' ? remToPx(toScreenWidth) : toScreenWidth;

  // console.log('minFontSize', minFontSize);
  // console.log('maxFontSize', maxFontSize);
  // console.log('min', min);
  // console.log('max', max);
  // console.log('fromWidth', fromWidth);
  // console.log('toWidth', toWidth);

  const fontRange = parseFloat(max) - parseFloat(min);
  const mediaRange = parseFloat(toWidth) - parseFloat(fromWidth);
  const sizeCalc = `calc(${min} + (${fontRange}) * (100vw - ${fromWidth}) / (${mediaRange}));`;

  return {
    '&': {
      [`@media screen and (max-width: ${fromWidth})`]: {
        'font-size': min,
      },

      [`@media screen and (min-width: ${fromWidth}) and (max-width: ${toWidth})`]: {
        'font-size': sizeCalc,
      },

      [`@media screen and (min-width: ${toWidth})`]: {
        'font-size': max,
      },
    },
  };
};

module.exports = fluidFontSize;
