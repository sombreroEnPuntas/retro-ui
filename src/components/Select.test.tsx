import React from 'react'
import { render } from '@testing-library/react'

// Dependencies
import { ThemeWrapper } from '../theme/ThemeWrapper'

// Unit
import Select from './Select'

const getProps = (customProps: any) => ({
  'data-testid': 'select',
  name: 'test',
  children: [
    <option key="<">{'<'}</option>,
    <option key="X">{'X'}</option>,
    <option key=">">{'>'}</option>,
  ],
  ...customProps,
})

describe.each`
  displayName          | props                     | css
  ${'Select'}          | ${{}}                     | ${'box-shadow: 0 4px #4d5256,0 -4px #4d5256,4px 0 #4d5256,-4px 0 #4d5256; outline-color: #212529;'}
  ${'Select multiple'} | ${{ multiple: true }}     | ${'box-shadow: 0 4px #4d5256,0 -4px #4d5256,4px 0 #4d5256,-4px 0 #4d5256; outline-color: #212529;'}
  ${'Select disabled'} | ${{ status: 'disabled' }} | ${'box-shadow: 0 4px #e9c46a,0 -4px #e9c46a,4px 0 #e9c46a,-4px 0 #e9c46a; outline-color: #b38106;'}
  ${'Select error'}    | ${{ status: 'error' }}    | ${'box-shadow: 0 4px #e76e55,0 -4px #e76e55,4px 0 #e76e55,-4px 0 #e76e55; outline-color: #ce372b;'}
  ${'Select success'}  | ${{ status: 'success' }}  | ${'box-shadow: 0 4px #92cc41,0 -4px #92cc41,4px 0 #92cc41,-4px 0 #92cc41; outline-color: #76c442;'}
`(`$displayName`, ({ props, css }) => {
  it(`renders with right styles`, () => {
    const { getByTestId } = render(
      <ThemeWrapper>
        <Select {...getProps(props)} />
      </ThemeWrapper>
    )
    const testedElement = getByTestId('select')
    expect(testedElement).toBeInTheDocument()

    expect(testedElement).toHaveStyle(css)
    // We cannot grab ::after pseudo element with testing-library.
    // Need to check if the dropdown arrow has color: transparent; on multiple
    // and color: [status]; for the rest.
    expect(testedElement.parentElement).toMatchSnapshot()
  })
})
