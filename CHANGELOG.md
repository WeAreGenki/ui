<!-- markdownlint-disable no-duplicate-header no-inline-html -->

# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/en/1.0.0/)
and this project adheres to [Semantic Versioning](http://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Added

- `@wearegenki/stylelint-config` now comes with preconfigured caching for better dev time performance.

### Changed

- BREAKING CHANGES:
  - `@wearegenki/vue-input-select` property `has-filter` renamed to `filterable`.
- Many internal property names changed to indicate which are safe to mangle (shorten for smaller file size).

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

- BREAKING CHANGES:
  - `@wearegenki/ui-postcss` renamed to `@wearegenki/postcss-config`.
  - `@wearegenki/ui-stylelint` renamed to `@wearegenki/stylelint-config`.
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

[Unreleased]: https://github.com/WeAreGenki/ui/compare/v0.4.2...HEAD
[0.4.2]: https://github.com/WeAreGenki/ui/compare/v0.4.1...v0.4.2
[0.4.1]: https://github.com/WeAreGenki/ui/compare/v0.4.0...v0.4.1
[0.4.0]: https://github.com/WeAreGenki/ui/compare/v0.3.0...v0.4.0
[0.3.0]: https://github.com/WeAreGenki/ui/compare/v0.2.0...v0.3.0
[0.2.0]: https://github.com/WeAreGenki/ui/compare/v0.1.1...v0.2.0
[0.1.1]: https://github.com/WeAreGenki/ui/compare/v0.1.0...v0.1.1
[0.1.0]: https://github.com/WeAreGenki/ui/compare/v0.0.0...v0.1.0
