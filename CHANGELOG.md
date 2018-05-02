<!-- markdownlint-disable no-duplicate-header no-inline-html -->

# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/en/1.0.0/)
and this project adheres to [Semantic Versioning](http://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Changed

- Better form validation styles.

## [0.12.0] - 2018-04-25

### Removed

- BREAKING CHANGE: Deleted all Marko.js packages and references. Although marko has a great custom syntax which compiles to HTML, unfortunately marko never lived up to its performance promises and was too hard to use in real-world use cases. We simply didn't feel productive when using marko. For projects which require high performance we're investigating alternatives and are currently leaning towards Svelte.

## [0.11.0] - 2018-04-25

### Added

- New CSS classes to fit width/height to content; `.w-fit` and `.h-fit`.

### Changed

- BREAKING CHANGE: Resized negative margin CSS classes; `.m?-1` is now `.m?-3`.
- BREAKING CHANGE: Renamed CSS class `.compact` to `.gc`. Also added new class `.gc0` for no gap in grid.
- BREAKING CHANGE: Renamed CSS class `.form-row` to `.form-group`.
- BREAKING CHANGE: Renamed CSS variable `--radius` to `--radius-1`.
- Input styles refactored and the recommended markup was revised.
- Increase link click area so default is the ideal size. If you have any overlapping links you should configure a smaller value.
- Slight refactor of `@wearegenki/vue-navbar` for better alignment and easier customisation.
- Continued refinement of styles including cleaning up the reboot CSS, changing colours for better visibility, refined cards, and various new CSS class.
- Remove custom `<abbr>` element styles; it's more user friendly to go with something similar to the browser default.

### Fixed

- Workarounds for `@wearegenki/vue-navbar` body and in-page links covered by the fixed navbar. It's no longer necessary to specify this manually.
- Significantly increase the browser coverage in browserslist for production builds.
- Tweak colours to pass contrast tests in accessibility audits.
- Visual bug in `@wearegenki/vue-input-toggle` where the colour under the slider was visible when active in some browsers.

## [0.10.0] - 2018-04-09

### Added

- More hero section variants.

### Changed

- General colour, gradient, and button refinements.
- Link hover animation; colour no longer fades out. This provides instant feedback and is more intuitive.
- Update peer dependency versions and update dependencies.

### Fixed

- Labels no longer have the same colour as links. Users previously thought they were clickable.
- Regression in `@wearegenki/vue-navbar` transition performance due to inconsistent shadow before vs after.
- Correct quick start install instructions in main readme.

## [0.9.0] - 2018-04-01

### Changed

- BREAKING CHANGE: Renamed the following CSS variables for consistency:
  - `--breakpoint-media` renamed to `--breakpoints-media`
  - `--shadow-light1` renamed to `--shadow-light-1`
  - `--shadow-light2` renamed to `--shadow-light-2`
  - `--card-touch-shadow1` renamed to `--card-touch-shadow-1`
  - `--card-touch-shadow2` renamed to `--card-touch-shadow-2`
  - `--card-touch-shadow1-legacy` renamed to `--card-touch-shadow-1-legacy`
  - `--card-touch-shadow2-legacy` renamed to `--card-touch-shadow-2-legacy`
- Converted all colours to use hsl notation. It's easier for humans to read colors using the `hsl()` function and the PostCSS build will convert all the colours to HEX anyway. One major caveat is the PostCSS build breaks and so the gradient colours need to remain in HEX notation [until the upstream bug is fixed](https://github.com/ianstormtaylor/css-color-function/issues/24).
- Rewrite of `@wearegenki/vue-navbar` component documentation.

### Fixed

- Legacy shadows (current default) on buttons not showing correctly.

## [0.8.0] - 2018-03-31

### Added

- Animated hover state for buttons.
- Dark button variant.
- New CSS variables for gradients.

### Changed

- BREAKING CHANGE: `@wearegenki/ui` is now, once again, a meta-package to install everything. To install just the developer tool configs there's a new meta-package `@wearegenki/dev`.
- BREAKING CHANGE: Rename CSS variables `--primary-gradient-*` to `--gradient-primary-*` and `--secondary-gradient-*` to `--gradient-secondary-*`.
- Redesigned colours and gradients.
- Much improved button colours and shadows.
- Better side nav style.
- Better slant section styles and now easily customizable via CSS variables.
- Small improvements to `@wearegenki/vue-navbar`.
- Better `testserver` logging.
- Updated dependencies.

### Fixed

- Shadow too large inside mini toggle slider in `@wearegenki/vue-input-toggle`.

### Removed

- Unused CSS variable `--secondary-accent`.

## [0.7.0] - 2018-03-25

### Changed

- BREAKING CHANGE: Rename `_width.css` to `_measure.css` as it now contains height classes too.
- More CSS improvements. Many changes including:
  - Refactor classes with `!important`, now uses the new `-i` modifier.
  - New transparency classes. New utility and border classes.
  - Simplify monospace font family; just use the browser default.

### Fixed

- `@wearegenki/vue-directive-tooltip` now handles left and bottom direction modifiers correctly.
- Tweak `@wearegenki/eslint-config` to allow reassignment of parameters called `el`. Especially helpful with Hyperapp and with DOM manipulation.
- PurgeCSS not removing some CSS classes and styles.
- Broken `<abbr>` element styles.

## [0.6.2] - 2018-03-25

### Added

- New "quick start" section in readme + example boilerplate development configuration files.

### Changed

- BREAKING CHANGE: Changed dependency graph. `@wearegenki/icons` and `@wearegenki/test` are no longer bundled with `@wearegenki/ui` and need to be installed separately.
- Remove `coverageThreshold` from Jest presets. It should be manually added per project instead.

### Fixed

- Some uses of `'use strict';`.

## [0.6.1] - 2018-03-25

### Fixed

- Issues with dependency graph.
- Bugs in test suite packages.

## [0.6.0] - 2018-03-25

### Changed

- BREAKING CHANGE: Changed dependency graph. The `@wearegenki/ui` meta-package only installs the development configs and now it's also necessary to manually install the meta package specific to the JavaScript framework you're using, e.g `@wearegenki/ui-vue` or `@wearegenki/ui-marko`. This helps to limit the number of dependencies which need to be installed; there's no point installing Vue.js packages if you're using Marko.
- BREAKING CHANGE: Test suite presets have also been split into their own packages. `@wearegenki/test` is now a generic test suite using Jest + Puppeteer. Vue and Marko suites spilt into `@wearegenki/test-vue` and `@wearegenki/test-marko` respectively.

## [0.5.2] - 2018-03-16

## Fixed

- Turns out it's a bad idea to have a symlink in an NPM package; revert the `@wearegenki/ui` package readme.

## [0.5.1] - 2018-03-16

### Added

- Codecov to see how code coverage grows over time. Automatically generated in the Travis CI builds.

### Changed

- Improvements to test server; SPA mode with index.html fallback and better logging.
- Continued work on test suite but still not stable yet.
- Remove website directory — it wasn't being used anyway.
- Refactor badges in readme.
- Updated dependencies.

## Fixed

- Toasts are now always GPU accelerated by default to prevent stuttering while animating.

## [0.5.0] - 2018-03-12

### Added

- New package `@wearegenki/test` which contains a preconfigured testing suite using Jest and Puppeteer. Also includes a simple local server for doing manual testing. This release is more about the initial setup and we'll be slowly incorporating this into the other packages going forward.
- New `@wearegenki/eslint-config` preset `jest` to go along with the new test package and many preset improvements.
- Travis CI to automate testing.

### Changed

- BREAKING CHANGE: `@wearegenki/vue-input-select` property `has-filter` renamed to `filterable`.
- BREAKING CHANGE: Rename `@wearegenki/vue-link-preload` to `@wearegenki/vue-link-preloader`.
- Many internal property names changed to indicate which are safe to mangle (shorten for smaller file size).
- Continued CSS style improvements.
- Small performance improvement to `@wearegenki/vue-input-select`; removed `:key` binding.
- Clean up `@wearegenki/stylelint-config`.
- Moved `@wearegenki/fonts` into a separate git repository.
- Updated dependencies.

## Fixed

- Use relative paths for CSS imports for better compatibility with some resource bundler tools (e.g. parcel, package-bundler).
- Vue resource resolving in `@wearegenki/eslint-config/vue`.

## [0.4.2] - 2018-02-03

### Changed

- Updated dependencies.

### Fixed

- Many v0.4.1 packages didn't get versioned or published possibly due to trying to publish from the `devel` branch (oops!). This release publishes those packages correctly.
- Stabilise `@wearegenki/postcss-config` minimal mode. Should now work in all cases.

## [0.4.1] - 2018-01-28

### Changed

- Small change to eslint preset for better compatibility with vuex mutations.

### Fixed

- Bug in `@wearegenki/postcss-config` which prevented use when used with the `minimal: true` option.
- Add missing dependency `@wearegenki/vue-directive-tooltip` in `@wearegenki/ui-vue`.

## [0.4.0] - 2018-01-27

### Added

- Disable _forced_ CSS hardware acceleration by default but allow enabling it via a new CSS variable `--optimize`. It's better to let the browser handle when something is hardware accelerated which, most of the time, results in smoother animations and better memory consumption.
- New `min` CSS mixin.
- New package [@wearegenki/eslint-config](https://www.npmjs.com/package/@wearegenki/eslint-config) which provides ESLint configuration presets. Currently comes with 3 variants, default/base, vue, and marko config.
- Internal development tooling improvements; use `tsconfig.js` and `*.d.ts` files for a better development experience in VS Code.

### Changed

- BREAKING CHANGE: `@wearegenki/ui-postcss` renamed to `@wearegenki/postcss-config`.
- BREAKING CHANGE: `@wearegenki/ui-stylelint` renamed to `@wearegenki/stylelint-config`.
- Continued improvements to CSS styles.
- Updated dependencies.

### Fixed

- Links in changelog

## [0.3.0] - 2018-01-14

### Added

- New package [@wearegenki/vue-directive-view](https://www.npmjs.com/package/@wearegenki/vue-directive-view) which add the `v-view` custom directive. This needs to be manually installed when using vue components which depend on it (vue-select, vue-directive-tooltip, and more in future).
  - _NOTE: This package has installation steps which must be done manually, see the [package readme](https://github.com/WeAreGenki/ui/blob/master/packages/vue-directive-view/README.md)._
- New package [@wearegenki/vue-directive-tooltip](https://www.npmjs.com/package/@wearegenki/vue-directive-view) that adds an easy way to add tooltips to elements. A good use case example is a minimal menu which uses only icons and no text — tooltips on menu items show a description or title of what the menu item is.
  - _NOTE: This package has installation steps which must be done manually, see the [package readme](https://github.com/WeAreGenki/ui/blob/master/packages/vue-directive-tooltip/README.md)._
- CSS rules for directional position, e.g. `right:0` = `.r0`, `bottom:2rem` = `.b4`.
- Basic readme in each package. We'll add a more comprehensive readme to each package over time.
- New examples of how to do a CSS custom build or how to set custom breakpoints. All examples can now be found in the [docs/examples directory](./docs/examples).

### Changed

- Various CSS performance improvements by using hardware acceleration where possible and practical. In particular the new `--use-drop-shadow` variable that when set to true will use `filter:drop-shadow()` instead of `box-shadow` when a shadow needs to be drawn. This is somewhat experimental because it can be buggy on old browsers and actually cause degraded performance. On modern browsers <abbr title="frames per second">FPS</abbr> may be unstable in some scenarios so make sure you test this before enabling in production.
- Continued refinement of CSS including buttons, colours, shadows, and much more.
- Renamed many CSS variables for consistency and ease of understanding.
- Updated dependencies.

## [0.2.0] - 2018-01-07

### Added

- Meta packages to facilitate installing multiple packages at once and optional packages:
  - [@wearegenki/ui](https://www.npmjs.com/package/@wearegenki/ui) — main meta package which installs everything other than optional packages. This is probably what you'll install most of the time.
  - [@wearegenki/ui-vue](https://www.npmjs.com/package/@wearegenki/ui-vue) — meta package to install Vue components only.
  - [@wearegenki/ui-marko](https://www.npmjs.com/package/@wearegenki/ui-marko) — meta package to install Marko components only.
  - [@wearegenki/fonts](https://www.npmjs.com/package/@wearegenki/fonts) — optional package to install our fonts. You'll need to symlink the `@wearegenki/fonts/src` directory to your static directory and use `@mixin font-face` to actually import the fonts you want.
- New packages with our dev tool config presets. These get installed along with @wearegenki/ui but they can also be installed separately:
  - [@wearegenki/ui-postcss](https://www.npmjs.com/package/@wearegenki/ui-postcss)
  - [@wearegenki/ui-stylelint](https://www.npmjs.com/package/@wearegenki/ui-stylelint)
  - [@wearegenki/ui-eslint](https://www.npmjs.com/package/@wearegenki/ui-eslint) (work in progress)
- New hardware accelerated CSS shadows using `filter:drop-shadow()` instead of `box-shadow`. On by default but there is a CSS variable to use normal box-shadow instead.
- [@wearegenki/vue-input-toggle](https://www.npmjs.com/package/@wearegenki/vue-input-toggle) is now visually pure CSS and doesn't use SVGs anymore. For basic functionality this component is feature complete. Mouse/touch drag capability will be adding in future.
- New [@wearegenki/vue-input-select](https://www.npmjs.com/package/@wearegenki/vue-input-select) component which is similar to the native `<select>` input but with a cleaner look, animation, and visual filtering of options.

### Changed

- Moved from a single package into a monorepo with many packages using [Lerna](https://lernajs.io/). This allows developers to install and import only the package/s they need, or install a meta package to pull everything in. It's still quite experimental but this change will make for a much better developer experience.
- Each component now lives in its own package so they have to be installed and imported separately or via a meta package.
- Reduced the number of breakpoints down to only 2, small and large. It's simple to use but your content will need to be adaptive.
- Many CSS values are now variables for easier customisation.
- Button style refinements.

### Removed

- 2 CSS breakpoints removed: not-small, medium.
- BrowserSupport Vue component — shouldn't really be component but rather a plain, standalone JS file. We'll be working on adding this in the future.

## [0.1.1] - 2017-12-29

### Added

- Rubik fonts and a mixin to import them.
- Script to debug PostCSS performance.

### Changed

- Improved form UX (still needs more work though!).
- Better text rendering.
- Updated package dependencies.

### Fixed

- Various bug fixes and performance improvements in Vue components and CSS.
- Linting now works as expected.

## [0.1.0] - 2017-12-13

### Added

- Initial public release with a base set of styles, Vue components, and dev configs but without a working build system so only source files are usable.

[Unreleased]: https://github.com/WeAreGenki/ui/compare/v0.12.0...HEAD
[0.12.0]: https://github.com/WeAreGenki/ui/compare/v0.11.0...v0.12.0
[0.11.0]: https://github.com/WeAreGenki/ui/compare/v0.10.0...v0.11.0
[0.10.0]: https://github.com/WeAreGenki/ui/compare/v0.9.0...v0.10.0
[0.9.0]: https://github.com/WeAreGenki/ui/compare/v0.8.0...v0.9.0
[0.8.0]: https://github.com/WeAreGenki/ui/compare/v0.7.0...v0.8.0
[0.7.0]: https://github.com/WeAreGenki/ui/compare/v0.6.2...v0.7.0
[0.6.2]: https://github.com/WeAreGenki/ui/compare/v0.6.1...v0.6.2
[0.6.1]: https://github.com/WeAreGenki/ui/compare/v0.6.0...v0.6.1
[0.6.0]: https://github.com/WeAreGenki/ui/compare/v0.5.2...v0.6.0
[0.5.2]: https://github.com/WeAreGenki/ui/compare/v0.5.1...v0.5.2
[0.5.1]: https://github.com/WeAreGenki/ui/compare/v0.5.0...v0.5.1
[0.5.0]: https://github.com/WeAreGenki/ui/compare/v0.4.2...v0.5.0
[0.4.2]: https://github.com/WeAreGenki/ui/compare/v0.4.1...v0.4.2
[0.4.1]: https://github.com/WeAreGenki/ui/compare/v0.4.0...v0.4.1
[0.4.0]: https://github.com/WeAreGenki/ui/compare/v0.3.0...v0.4.0
[0.3.0]: https://github.com/WeAreGenki/ui/compare/v0.2.0...v0.3.0
[0.2.0]: https://github.com/WeAreGenki/ui/compare/v0.1.1...v0.2.0
[0.1.1]: https://github.com/WeAreGenki/ui/compare/v0.1.0...v0.1.1
[0.1.0]: https://github.com/WeAreGenki/ui/compare/v0.0.0...v0.1.0
