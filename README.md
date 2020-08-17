# retro-ui

[![license: MIT](https://img.shields.io/github/license/sombreroenpuntas/retro-ui)](LICENSE)
[![npm: retro-ui](https://img.shields.io/npm/v/retro-ui)](https://www.npmjs.com/package/retro-ui)
![Tests](https://github.com/sombreroEnPuntas/retro-ui/workflows/Tests/badge.svg?branch=master)

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

Styling and linting rules are enforced on local env. We use `prettier` and `eslint`, make sure to configure your editor.  
Commit message format is enforced to adhere to conventional commits.  
Don't worry, you'll get feedback from the tools when trying to commit 🤖📟

### CI & Releases

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

- Write meaningful tests & coverage (wdio?)
- setup eslint/prettier & static analysis (codeclimate?)

## Big thanks to NES.css

Heavily inspired by [NES.css](https://nostalgic-css.github.io/NES.css/), an awesome NES-style CSS Framework 💖🎮🌟
