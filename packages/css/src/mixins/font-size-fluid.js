/* eslint-disable max-len */
/*

  FLUID FONT SIZE (experimental)

  README:
    TODO: Write readme.

  REF: https://www.smashingmagazine.com/2016/05/fluid-typography/

  USAGE:
    .example {
      @mixin fluid-font-size min-font-size, max-font-size, from-screen-width, until-screen-width, [use-px];
    }

    min-font-size = font size below from-screen-width
    max-font-size = font size above until-screen-width
    from-screen-width = start growing font size from this screen viewport width
    until-screen-width = stop growing font size at this screen viewport width
    [use-px] = if true output results with px value, or default is rem (optional)

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

module.exports = (
  mixin,
  minFontSize,
  maxFontSize,
  fromScreenWidth,
  untilScreenWidth,
  usePxUnit = false
) => {
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
