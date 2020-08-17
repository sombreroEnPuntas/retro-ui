import styled from 'styled-components'

export const Button = styled.button`
  ${({ theme: { colors, fonts } }) => `
    background-color: ${colors.black.background};
    box-shadow: 4px 0 ${colors.black.shadow},
      0 -4px ${colors.black.shadow},
      -4px 0 ${colors.black.shadow},
      0 4px ${colors.black.shadow};
    color: ${colors.black.outline};
    cursor: pointer;
    display: block;
    font-family: ${fonts.fontFamily};
    font-size: 0.65em;
    font-weight: bold;
    line-height: calc(2 * ${fonts.lineHeight});
    margin: 0.5em;
    padding: 0.5em;
    `}
`

/** @component */
export default Button
