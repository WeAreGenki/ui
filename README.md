# @wearegenki/ui

> CSS Grid based CSS library + Vue.js framework — [https://wearegenki.com/pro-tools#FOSS](https://wearegenki.com/pro-tools#FOSS)

TODO: Write a nice readme :)

## Usage

### Simple

Includes a precompiled copy of the CSS framework but does not include any Vue components.

Useful for quick hacks or for simple projects when you don't need any framework customisation or you don't want to include all the build dependencies.

```bash
#TODO: Write me
```

### Pro

```bash
#TODO: Write me
```

### Removing unused CSS

It's **highly recommended** to do post-processing of your CSS to remove any unused CSS styles. The framework is design to be powerful and flexible but this comes at the cost of a slightly large file size, however, removing unused CSS will drastically reduce the final size of your CSS.

The recommended tools to do this are:

* [UnCSS](https://github.com/giakki/uncss) — reliable but only works with static html files (not with Webpack etc.) so it requires a separate step in your build process
* [PurgeCSS](https://github.com/FullHuman/purgecss) — is compatible with various build systems including Webpack and Rollup

## Browser compatibility

Because this framework uses [CSS Grid Layout](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout) it's limited to [browsers that support it](http://caniuse.com/#feat=css-grid), which currently include:

* Chrome for Android 61
* Android browser 56
* iOS Safari 10.3
* Chrome 57
* Firefox 52
* Safari 10.1
* Edge 16
* Opera 46

Older browser compatibility is planned and will be added in future.

## Known issues

Builds are designed to run on *nix systems and will likely fail on Windows machines.

-----

© 2017 [We Are Genki](https://wearegenki.com)
