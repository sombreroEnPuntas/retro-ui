import React from 'react'
import { render } from '@testing-library/react'

// Dependencies
import { ThemeWrapper } from '../theme/ThemeWrapper'

// Unit
import Input from './Input'

const getProps = (customProps: any) => ({
  'data-testid': 'input',
  ...customProps,
})

describe.each`
  displayName         | props                     | css
  ${'Input'}          | ${{}}                     | ${'box-shadow: 0 4px #4d5256,0 -4px #4d5256,4px 0 #4d5256,-4px 0 #4d5256; outline-color: #212529;'}
  ${'Input disabled'} | ${{ status: 'disabled' }} | ${'box-shadow: 0 4px #E9C46A,0 -4px #E9C46A,4px 0 #E9C46A,-4px 0 #E9C46A; outline-color: #B38106;'}
  ${'Input error'}    | ${{ status: 'error' }}    | ${'box-shadow: 0 4px #e76e55,0 -4px #e76e55,4px 0 #e76e55,-4px 0 #e76e55; outline-color: #ce372b;'}
  ${'Input success'}  | ${{ status: 'success' }}  | ${'box-shadow: 0 4px #92cc41,0 -4px #92cc41,4px 0 #92cc41,-4px 0 #92cc41; outline-color: #76c442;'}
`(`$displayName`, ({ props, css }) => {
  it(`renders with right styles`, () => {
    const { getByTestId } = render(
      <ThemeWrapper>
        <Input {...getProps(props)} />
      </ThemeWrapper>
    )
    const testedElement = getByTestId('input')
    expect(testedElement).toBeInTheDocument()

    expect(testedElement).toHaveStyle(css)
  })
})
