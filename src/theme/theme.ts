import baseStyled, { keyframes, ThemedStyledInterface } from 'styled-components'

import { boxShadow, boxShadowSize } from './snippets'

const animations = {
  blink: keyframes`
  0% {
    opacity: .2;
  }
  20% {
    opacity: 1;
  }
  100% {
    opacity: .2;
  }
  `,
}

export const breakpoints = {
  // just a reminder to be mobile-first, don't actually use this plz :)
  mobile: '@media (min-width: 0px)',
  desktop: '@media (min-width: 768px)',
}

const colors = {
  black: {
    background: 'white',
    backgroundAlt: 'papayawhip',
    outline: '#212529',
    shadow: '#4d5256',
  },
  error: {
    background: '#ffd7cf',
    outline: '#ce372b',
    shadow: '#e76e55',
  },
  success: {
    background: '#c9d68f',
    outline: '#76c442',
    shadow: '#92cc41',
  },
  warning: {
    background: '#ffe5a6',
    outline: '#b38106',
    shadow: '#e9c46a',
  },
}

const fonts = {
  fontFamily: "'Press Start 2P', monospace",
  lineHeight: '1.5em',
}

const snippets = {
  boxShadow,
  boxShadowSize,
}

export const theme = {
  animations,
  breakpoints,
  colors,
  fonts,
  snippets,
}

export type Theme = typeof theme
export const styled = baseStyled as ThemedStyledInterface<Theme>
