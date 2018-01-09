<!--
  TODO:
    - Write about components for people who don't know anything about Vue or Marko (most devs will never have seen Marko in particular).
-->

# @wearegenki/ui

A friendly UI framework which aims to be straightforward, intuitive, and high performance. Uses modern and futuristic tools and approach. Intended to be used in Vue or Marko projects or as standalone CSS.

_NOTE: This is currently a work in progress and not recommended for production applications... unless you love living on the bleeding edge!_

## Overview

The styles are designed around things we do at [We Are Genki](https://wearegenki.com) — ecommerce, microsites, next-gen web apps — but are intentionally flexible enough for general web design use.

Features:

* semi-flat design
* microinteractions
* high performance
* great developer experience

Technologies:

* CSS grid layout
* [PostCSS](http://postcss.org)
* [Vue](https://vuejs.org/) components
* [Marko](https://markojs.com) components

## Usage

TODO: Write me :)

```bash
yarn add @wearegenki/ui
```

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

_NOTE: Older browser compatibility via progressive fallback is planned and will be added in the near future._

## Known issues

Builds are designed to run on *nix systems and will likely fail on Windows machines.

-----

© 2018 [We Are Genki](https://wearegenki.com)
