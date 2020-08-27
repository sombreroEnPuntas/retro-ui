import React from 'react'
import { render } from '@testing-library/react'

// Dependencies
import { ThemeWrapper } from '../theme/ThemeWrapper'

// Unit
import Box from './Box'

const getProps = (customProps: any) => ({
  ...customProps,
})

test('Box renders a message correctly', () => {
  const { getByText } = render(
    <ThemeWrapper>
      <Box {...getProps({ children: ':)' })} />
    </ThemeWrapper>
  )

  expect(getByText(':)')).toBeVisible()
  expect(getByText(':)')).toHaveAttribute('type', 'black')
})

test('Box renders an error message correctly', () => {
  const { getByText } = render(
    <ThemeWrapper>
      <Box {...getProps({ children: "418: I'm a teapot", error: true })} />
    </ThemeWrapper>
  )

  expect(getByText("418: I'm a teapot")).toBeVisible()
  expect(getByText("418: I'm a teapot")).toHaveAttribute('type', 'error')
})
