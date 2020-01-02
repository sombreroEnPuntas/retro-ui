# retro-ui

![GitHub](https://img.shields.io/github/license/sombreroenpuntas/retro-ui)
![npm](https://img.shields.io/npm/v/retro-ui)

NES-style (8bit-like) react &amp; styled-components UI

## Usage

1. Install with:

```sh
yarn add retro-ui
```

2. Use like:

```jsx
import React from 'react'
import { Button } from 'retro-ui'

const App = () => <Button>{'Rawr!'}</Button>
```

## Development

This react components library is made with `styled-components` and `react-styleguidist` for docs.

### Scripts

```sh
yarn #install deps :)
yarn start # runs a dev server with hot reload
yarn build # builds
yarn test  # run tests with jest and @testing-library/react
```

## Contribute

Yes please!

### TODO

- Global resets & fonts via styled-components
- Better stories, including types
- Write meaningful tests & coverage (wdio?)
- setup eslint & static analysis
- use commitlint & standard version
- setup dev hooks
- setup build lib
- setup github actions!!!
- Dump all my components from other projects here :)
- Is it possible to source stories from tests?

## Thanks to NES.css

Heavily inspired by [NES.css](https://nostalgic-css.github.io/NES.css/), an awesome NES-style CSS Framework 💖🎮🌟
