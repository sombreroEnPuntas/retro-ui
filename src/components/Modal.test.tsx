import React from 'react'
import { render } from '@testing-library/react'

// Dependencies
import { ThemeWrapper } from '../theme/ThemeWrapper'

// Unit
import Modal from './Modal'

const getProps = (customProps: any) => ({
  'data-testid': 'modal',
  children: '🦕',
  ...customProps,
})

describe.each`
  displayName             | props              | css
  ${'Modal background'}   | ${{}}              | ${'background-color: #4d525666;'}
  ${'Modal default open'} | ${{}}              | ${'display: flex;'}
  ${'Modal open'}         | ${{ open: true }}  | ${'display: flex;'}
  ${'Modal close'}        | ${{ open: false }} | ${'display: none;'}
`(`$displayName`, ({ props, css }) => {
  it(`renders with ${css}`, () => {
    const { getByTestId } = render(
      <ThemeWrapper>
        <Modal {...getProps(props)} />
      </ThemeWrapper>
    )
    const testedElement = getByTestId('modal')
    expect(testedElement).toBeInTheDocument()

    expect(testedElement).toHaveStyle(css)
  })
})
