# Production Builds

## Performance considerations

* load — small file size
* runtime — lightweight JS and hardware accelerated CSS
* conversions — quantify with UX tests

## Removing unused CSS

It's **highly recommended** to do post-processing of your CSS to remove any unused CSS styles. The framework is design to be powerful and flexible but this comes at the cost of a slightly large file size, however, removing unused CSS will drastically reduce the final size of your CSS.

The recommended tools to do this are:

* [PurgeCSS](https://github.com/FullHuman/purgecss) — is compatible with various build systems including Webpack and Rollup or standalone.
* [UnCSS](https://github.com/giakki/uncss) — only works with static html files (not with Webpack etc.) so it requires a separate step in your build process.
