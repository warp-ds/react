# Warp React

React components exported under `@warp-ds/react`.

## Development

The project uses [Storybook](https://storybook.js.org/) for component
development. Start the storybook instance by running the following command:

```sh
pnpm dev
```

## Documentation

To start a local dev server for the documentation site, run the following
command:

```sh
pnpm docs:dev
```

## Contributing

We use [commitizen](https://github.com/commitizen/cz-cli) to ensure coherent commit message structure, used by [semantic release](#releases) to generate change logs and handle versioning.

```
npm install -g commitizen
```

When installed, you should be able to type `cz` or `git cz` in your terminal to commit your changes (replacing
`git commit`).

[![Add and commit with Commitizen](https://github.com/commitizen/cz-cli/raw/master/meta/screenshots/add-commit.png)](https://github.com/commitizen/cz-cli/raw/master/meta/screenshots/add-commit.png)


## Releases

This project uses [Semantic Release](https://github.com/semantic-release/semantic-release) to automate package
publishing when making changes to the `main` or `alpha` branch.

It is recommended to branch off the `alpha` branch and follow
[conventional commits](https://www.conventionalcommits.org/en/v1.0.0/#summary) when making changes. When your
changes are ready for pull request, this should be opened against the `alpha` branch.

Please note that the version published will depend on your commit message structure. Make sure to use commitizen (see [Development section](#Contributing)).
