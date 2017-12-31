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
  // use @wearegenki/fonts if no fontDir specified
  const dir = fontDir || path.relative(
    process.cwd(),
    path.join(path.dirname(require.resolve('@wearegenki/fonts')), 'src'),
  );

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
