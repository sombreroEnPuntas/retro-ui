import baseStyled, { keyframes, ThemedStyledInterface } from 'styled-components'

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
}

const fonts = {
  fontFamily: "'Press Start 2P', monospace",
  lineHeight: '1.5em',
}

export const theme = {
  animations,
  colors,
  fonts,
}

export type Theme = typeof theme
export const styled = baseStyled as ThemedStyledInterface<Theme>