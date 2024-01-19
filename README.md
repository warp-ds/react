# Warp-ds React

Welcome to [@warp-ds/react](https://github.com/warp-ds/react),
a collection of React components for building user interfaces based on the [Warp Design System](https://github.com/warp-ds/).
This repository is maintained by the [Warp Core Team](https://github.com/orgs/warp-ds/teams/warp-core-team)
and is home to the [@warp-ds/react](https://www.npmjs.com/package/@warp-ds/react) library.


## How to contribute

If you'd like to contribute to `@warp-ds/react`, start by reviewing the [contributing guidelines](https://github.com/warp-ds/react/blob/main/CONTRIBUTING.md).


## How to use

### Installation

Install by using npm/pnpm or by adding a script link:

#### Install using npm
```sh
npm install @warp-ds/react
```

#### Install using pnpm
```sh
pnpm add @warp-ds/react
```

#### Using a direct link to Eik
```html
<script src="https://assets.finn.no/pkg/@warp-ds/react/v1"></script>
```
### Testing

This app contains 2 types of tests:

1. Unit tests: These are based on vitest and testing-library. Run these tests in watch mode using `pnpm test:watch` or with coverage report by `pnpm test:unit`.
2. Component tests: These are currently written with storybook. You can start storybook using `pnpm dev` and see the tests in the interavtive panel for a story. Alternatively, you can run these tests on CI/Command line using `pnpm test:storybook`. This will start storybook and run tests concurrently. 
Note: you might have to run `pnpm exec playwright install` first time as you might not have the chromium playwright executable available locally.

### Documentation

For information on the components available in the package and how to use them,
see the [Warp Design System documentation](https://warp-ds.github.io/tech-docs/). 


## Releases

This project is continuously published to [NPM](https://www.npmjs.com/package/@warp-ds/react) and [Eik](https://assets.finn.no/pkg/@warp-ds/react) using a `next` tag (e.g. `1.1.0-next.1`).
Anyone needing to use the latest changes of this package can point to the `next` version while waiting for the stable release.


## Changelog

Detailed changes for each release can be found in the [CHANGELOG](CHANGELOG.md) file.

## NOTE:
Currently Crowdin has a bug that makes the synchronize-with-crowdin build step fail in the next-branch. Crowdin does some extra pre-processing of uploaded files, and their processor breaks with obsolete strings syntax in the .po-files. 

A temporary fix to this is to run 
```sh
pnpm lingui extract --clean
```

This command should no longer be necessary to run once the bug in Crowdin is fixed.


## License

@warp-ds/react is available under the [Apache-2.0 software license](https://github.com/warp-ds/react/blob/main/LICENSE).
