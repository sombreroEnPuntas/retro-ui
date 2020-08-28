import React from 'react'
import { render } from '@testing-library/react'

// Dependencies
import { ThemeWrapper } from '../theme/ThemeWrapper'

// Unit
import Message from './Message'

const getProps = (customProps: any) => ({
  children: ':)',
  ...customProps,
})

describe.each`
  displayName          | props                  | css
  ${'Message'}         | ${{}}                  | ${'color: #212529;'}
  ${'Message error'}   | ${{ type: 'error' }}   | ${'color: #ce372b;'}
  ${'Message success'} | ${{ type: 'success' }} | ${'color: #76c442;'}
  ${'Message warning'} | ${{ type: 'warning' }} | ${'color: #B38106;'}
`(`$displayName`, ({ props, css }) => {
  it(`renders with ${css}`, () => {
    const { getByText } = render(
      <ThemeWrapper>
        <Message {...getProps(props)} />
      </ThemeWrapper>
    )

    expect(getByText(':)')).toBeVisible()
    expect(getByText(':)')).toHaveStyle(css)
  })
})
