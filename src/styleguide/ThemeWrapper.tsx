import React from 'react'
import { ThemeProvider } from 'styled-components'

import { theme, Theme } from './theme'

export const ThemeWrapper: React.FunctionComponent<{ customTheme?: Theme }> = ({
  children,
  customTheme,
}) => (
  <ThemeProvider theme={{ ...theme, ...customTheme }}>{children}</ThemeProvider>
)

export default ThemeWrapper
