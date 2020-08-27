# retro-ui

[![license: MIT](https://img.shields.io/github/license/sombreroenpuntas/retro-ui)](LICENSE)
[![npm: retro-ui](https://img.shields.io/npm/v/retro-ui)](https://www.npmjs.com/package/retro-ui)
![Tests](https://github.com/sombreroEnPuntas/retro-ui/workflows/Tests/badge.svg?branch=master)
[![DeepScan grade](https://deepscan.io/api/teams/1366/projects/13545/branches/231374/badge/grade.svg)](https://deepscan.io/dashboard#view=project&tid=1366&pid=13545&bid=231374)
[![Maintainability](https://api.codeclimate.com/v1/badges/4c16afd560120af0eae4/maintainability)](https://codeclimate.com/github/sombreroEnPuntas/retro-ui/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/4c16afd560120af0eae4/test_coverage)](https://codeclimate.com/github/sombreroEnPuntas/retro-ui/test_coverage)

NES-style (8bit-like) react &amp; styled-components UI

## Usage

1. Install with:

```sh
yarn add retro-ui
```

2. Add the font via CDN on `index.html` head:

```html
<!DOCTYPE html>
<html>
  <head>
    <!-- [...] -->
    <link
      rel="stylesheet"
      href="https://fonts.googleapis.com/css?family=Press+Start+2P"
    />
  </head>
  <!-- [...] -->
</html>
```

3. Use like:

```jsx
import React from 'react'
import { Button, ThemeWrapper } from 'retro-ui'

const App = () => (
  <ThemeWrapper>
    <Button>{'Rawr!'}</Button>
  </ThemeWrapper>
)
```

Detailed docs [here](https://sombreroenpuntas.github.io/retro-ui/)

## Development

This react library is made with `styled-components`.  
Uses `react-styleguidist` for docs.

### Scripts

```sh
yarn        # install deps :)
yarn start  # runs a styleguidist dev server with hot reload
yarn lint   # lint rules
yarn test   # run unit/integration tests
```

When updating docs, please re-build the docs page and commit the changes:

```sh
yarn docs   # builds a styleguidist docs page
```

To try out the library from a local build:

```sh
yarn build                      # builds for distributing as npm package
cd ../react-test-app            # navigate to a test project
yarn add file:../retro-ui/build # install the library from local version
```

To create a tag:

```sh
yarn release    # Generate a release with automated changelog, version bump and tag
```

### Local env

Styling and linting rules are enforced on local env. Requires `prettier` and `eslint`, as well as editor/IDE integration.  
Commit message format is enforced to adhere to conventional commits.  
Don't worry, there's feedback from the tools when trying to commit 🤖📟

### CI & Releases

- DeepScan & CodeClimate keep an eye on tech debt and give automated PR reviews
- On every push to `master` branch, Github pages will publish the website in `docs/` folder.
- On every push, CI runs linting and unit/integration tests.
- On every new `master` tag, CI will build the library and publish it to NPM.

## Contribute

Yes please!

### TODO

- Dump all my components from other projects here :)
- eject `crapp`
- Global resets & fonts via styled-components

---

- is styleguidist making sense, or switch to storybook?
  - Better stories, including types
  - Is it possible to source stories from tests?

---

- Write meaningful e2e tests (wdio?)

## Big thanks to NES.css

Heavily inspired by [NES.css](https://nostalgic-css.github.io/NES.css/), an awesome NES-style CSS Framework 💖🎮🌟
