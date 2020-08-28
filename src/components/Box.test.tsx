import React from 'react'
import { render } from '@testing-library/react'

// Dependencies
import { ThemeWrapper } from '../theme/ThemeWrapper'

// Unit
import Box from './Box'

const getProps = (customProps: any) => ({
  children: ':)',
  ...customProps,
})

describe.each`
  displayName      | props                  | css
  ${'Box'}         | ${{}}                  | ${'background-color: white; box-shadow: 0 4px #4d5256,0 -4px #4d5256,4px 0 #4d5256,-4px 0 #4d5256; color: #212529;'}
  ${'Box error'}   | ${{ type: 'error' }}   | ${'background-color: #ffd7cf; box-shadow: 0 4px #E9C46A,0 -4px #E9C46A,4px 0 #E9C46A,-4px 0 #E9C46A; color: #ce372b;'}
  ${'Box success'} | ${{ type: 'success' }} | ${'background-color: #c9d68f; box-shadow: 0 4px #e76e55,0 -4px #e76e55,4px 0 #e76e55,-4px 0 #e76e55; color: #76c442;'}
  ${'Box warning'} | ${{ type: 'warning' }} | ${'background-color: #FFE5A6; box-shadow: 0 4px #92cc41,0 -4px #92cc41,4px 0 #92cc41,-4px 0 #92cc41; color: #B38106;'}
`(`$displayName`, ({ props, css }) => {
  it(`renders with ${css}`, () => {
    const { getByText } = render(
      <ThemeWrapper>
        <Box {...getProps(props)} />
      </ThemeWrapper>
    )

    expect(getByText(':)')).toBeVisible()
    expect(getByText(':)')).toHaveStyle(css)
  })
})
