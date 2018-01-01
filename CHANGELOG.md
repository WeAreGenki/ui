<!-- markdownlint-disable MD024 -->

# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/en/1.0.0/)
and this project adheres to [Semantic Versioning](http://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [0.2.0] - TBA

### Added

- Meta packages to facilitate installing multiple packages at once and optional packages:
  - @wearegenki/ui — main meta package which installs everything other than optional packages. This is probably what you'll install most of the time.
  - @wearegenki/ui-vue — meta package to install Vue components only.
  - @wearegenki/ui-marko — meta package to install Marko components only.
  - @wearegenki/fonts — optional package to install our fonts. You'll need to symlink the `@wearegenki/fonts/src` directory to your static directory and use `@mixin font-face` to actually import the fonts you want.
- New packages with our dev tool config presets. These get installed along with @wearegenki/ui but they can also be installed separately:
  - @wearegenki/ui-eslint (work in progress)
  - @wearegenki/ui-postcss
  - @wearegenki/ui-stylelint
- New early access channel for NPM. Install via `yarn add @wearegenki/ui@next`.

### Changed

- Moved from a single package into a monorepo with many packages using Lerna. This allows developers to install and import only the package/s they need, or install a meta package to pull everything in. It's still quite experimental but this change will make for a much better developer experience.
- Each component now lives in its own package so they have to be installed and imported separately or via a meta package.
- Reduced the number of breakpoints down to only 2, small and large. It's simple to use but your content will need to be adaptive.
- Many CSS values are now variables for easier customisation.

### Removed

- 2 CSS breakpoints where removed, not-small and medium.
- BrowserSupport Vue component shouldn't be a vue component and should be implemented in plain JS and in its own JS bundle. We'll be working on adding this in the future.

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

[Unreleased]: https://github.com/olivierlacan/keep-a-changelog/compare/v0.2.0...HEAD
[0.2.0]: https://github.com/olivierlacan/keep-a-changelog/compare/v0.2.0...v0.1.1
[0.1.1]: https://github.com/olivierlacan/keep-a-changelog/compare/v0.1.1...v0.1.0
[0.1.0]: https://github.com/olivierlacan/keep-a-changelog/compare/v0.1.0...v0.0.0
