/*
  Fluid font size (experimental)

  README:
    TODO: Write readme.

  REF: https://www.smashingmagazine.com/2016/05/fluid-typography/
*/

function getUnit(value) {
  const match = value.match(/px|rem|em$/);

  return match ? match.toString() : null;
}

function convertSize(size, outputPx) {
  const baseSize = 16; // 16px is the normal browser default font size
  const unit = getUnit(size);

  if (unit === null) throw new Error('Only px, rem, and em units are supported');

  if (outputPx && (unit === 'rem' || unit === 'em')) {
    // convert rem or em into px
    return `${parseFloat(size) * baseSize}px`;
  } else if (!outputPx && unit === 'px') {
    // convert px into rem
    return `${parseFloat(size) / baseSize}rem`;
  } else if (!outputPx && unit === 'em') {
    // change unit from em to rem
    return `${parseFloat(size)}rem`;
  }
  // doesn't need converting so return as is
  return size;
}

const fluidFontSize = (mixin, minFontSize, maxFontSize, fromScreenWidth, untilScreenWidth, usePxUnit = false) => {
  const minFont = convertSize(minFontSize, usePxUnit);
  const maxFont = convertSize(maxFontSize, usePxUnit);
  const minMedia = convertSize(fromScreenWidth, usePxUnit);
  const maxMedia = convertSize(untilScreenWidth, usePxUnit);
  const fontRange = parseFloat(maxFont) - parseFloat(minFont);
  const mediaRange = parseFloat(maxMedia) - parseFloat(minMedia);
  const sizeCalc = `calc(${minFont} + ${fontRange} * (100vw - ${minMedia}) / ${mediaRange});`;

  return {
    '&': {
      [`@media screen and (max-width: ${fromScreenWidth})`]: {
        'font-size': minFont,
      },

      [`@media screen and (min-width: ${fromScreenWidth}) and (max-width: ${untilScreenWidth})`]: {
        'font-size': sizeCalc,
      },

      [`@media screen and (min-width: ${untilScreenWidth})`]: {
        'font-size': maxFont,
      },
    },
  };
};

module.exports = fluidFontSize;
