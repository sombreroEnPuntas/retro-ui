# retro-ui

[![license: MIT](https://img.shields.io/github/license/sombreroenpuntas/retro-ui)](LICENSE)
[![npm: retro-ui](https://img.shields.io/npm/v/retro-ui)](https://www.npmjs.com/package/retro-ui)

NES-style (8bit-like) react &amp; styled-components UI

## Usage

1. Install with:

```sh
yarn add retro-ui
```

2. Add the font via CDN on your `index.html` head:

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
yarn docs   # builds a styleguidist docs page
yarn build  # builds for distributing as npm package
yarn test   # run tests with jest and @testing-library/react
```

## Contribute

Yes please!

### TODO

- Dump all my components from other projects here :)
- eject `crapp` and organize properly deps to reduce bundle size
- Global resets & fonts via styled-components
- Better stories, including types
- Is it possible to source stories from tests?

---

- Write meaningful tests & coverage (wdio?)
- setup eslint/prettier & static analysis (codeclimate?)

---

- setup CI/CD (github actions)!!!

## Thanks to NES.css

Heavily inspired by [NES.css](https://nostalgic-css.github.io/NES.css/), an awesome NES-style CSS Framework 💖🎮🌟
