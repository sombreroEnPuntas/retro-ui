import React from 'react'
import { render } from '@testing-library/react'

// Dependencies
import { ThemeWrapper } from '../styleguide/ThemeWrapper'

// Unit
import Button from './Button'

test('renders button with children', () => {
  const { getByText } = render(
    <ThemeWrapper>
      <Button>{'Rawr!'}</Button>
    </ThemeWrapper>,
  )
  const buttonElement = getByText(/Rawr!/i)
  expect(buttonElement).toBeInTheDocument()
})
