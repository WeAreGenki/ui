<!-- markdownlint-disable first-line-h1 -->

**IMPORTANT: This project has been deprecated, please use [`minna-ui`](https://github.com/WeAreGenki/minna-ui), a new UI framework which is based on the next-gen version of `@wearegenki/ui`. It follows our decision at We Are Genki to transition our projects from [Vue](https://vuejs.org) to [Svelte](https://svelte.technology).**

-----

[![Build status](https://img.shields.io/travis/WeAreGenki/ui.svg)](https://travis-ci.org/WeAreGenki/ui)
[![Coverage status](https://img.shields.io/codecov/c/github/WeAreGenki/ui.svg)](https://codecov.io/gh/WeAreGenki/ui)
[![NPM version](https://img.shields.io/npm/v/@wearegenki/ui.svg)](https://www.npmjs.com/package/@wearegenki/ui)
[![NPM version beta](https://img.shields.io/npm/v/@wearegenki/ui/beta.svg)](https://www.npmjs.com/package/@wearegenki/ui)
[![Licence](https://img.shields.io/npm/l/@wearegenki/ui.svg)](https://github.com/WeAreGenki/ui/blob/master/LICENCE)

# @wearegenki/ui

A friendly UI framework which aims to be straightforward, intuitive, and high performance. Uses modern and futuristic tools and approach. Intended to be used in Vue projects or as standalone CSS.

_NOTE: This is currently a work in progress and is not recommended for production applications... unless you love living on the bleeding edge!_

## Overview

The framework is designed around the types of projects we do at [We Are Genki](https://wearegenki.com) — ecommerce, microsites, and next-gen web apps — but are flexible enough for any web design use.

Features:

* semi-flat design
* microinteractions
* high performance
* [universal design](https://en.wikipedia.org/wiki/Universal_design) as a core concept

Technologies:

* CSS Grid Layout
* [PostCSS](http://postcss.org)
* [Vue](https://vuejs.org/) components

## Documentation

To see [live examples](https://ui.wearegenki.com/examples) and the docs, visit [ui.wearegenki.com](https://ui.wearegenki.com).

### Quick start

#### 1. Install dependencies

Choose one of the following:

```bash
# everything (not recommended but convenient for quick prototyping)
yarn install "@wearegenki/ui" vue vue-router vuex \
  && yarn install -D postcss eslint stylelint jest puppeteer vue-server-renderer vue-template-compiler

# development configuration files only
yarn install -D "@wearegenki/dev" "@wearegenki/test" eslint stylelint jest puppeteer

# CSS + compilation only
yarn install "@wearegenki/css" \
  && yarn install -D "@wearegenki/postcss-config" postcss

# all Vue.js packages (includes CSS)
yarn install "@wearegenki/ui-vue" vue vue-router vuex \
  && yarn install -D "@wearegenki/ui" "@wearegenki/test-vue" postcss eslint stylelint jest vue-server-renderer vue-template-compiler
```

#### 2. Copy config boilerplate

```bash
# get latest copy of the repository
git clone --depth 1 https://github.com/WeAreGenki/ui.git <TEMPORARY_LOCATION>

# copy configuration files
cp -r <TEMPORARY_LOCATION>/docs/examples/boilerplate-configs/. <YOUR_PROJECT_LOCATION>
```

See [config boilerplate readme](https://github.com/WeAreGenki/ui/blob/master/docs/examples/boilerplate-configs/README.md) for more tips.

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

Builds are designed to run on *nix systems and may fail on Windows machines.

## Changelog

See [CHANGELOG.md](https://github.com/WeAreGenki/ui/blob/master/CHANGELOG.md).

## Licence

`@wearegenki/ui` is an Apache-2.0 licensed open source project. See [LICENCE](https://github.com/WeAreGenki/ui/blob/master/LICENCE).

-----

© 2018 [We Are Genki](https://wearegenki.com)
