/*
  @FONT-FACE MAKER

  README:
    Generates a @font-face rule for a font. You need to call this mixin as many
    times as you have fonts. This uses the `font-display: optional` property
    which means unless the font is already downloaded and loads instantly, it
    will not flash from unstyled to styled (no FOUT).

  USAGE:
    @mixin font-face <family>, <name>, <style>, <weight>, [<directory>];
*/

const path = require('path');

module.exports = (mixin, fontFamily, fontName, fontStyle, fontWeight, fontDir) => {
  /**
   * XXX: This path may not be ideal for all build tools, especially when using
   * symlinks, it's better to specify fontDir.
   */
  const dir = fontDir || path.join(__dirname, '../../fonts');

  return {
    '@font-face': {
      'font-family': fontFamily,
      src: `local("${fontName}"),
        url("${dir}/${fontName}.woff2") format("woff2"),
        url("${dir}/${fontName}.woff") format("woff")`,
      'font-style': fontStyle,
      'font-weight': fontWeight,
      'font-display': 'optional',
    },
  };
};
