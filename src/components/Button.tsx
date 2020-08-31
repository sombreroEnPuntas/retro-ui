import { styled } from '../theme/theme'

export const Button = styled.button`
  ${({ theme: { breakpoints, colors, fonts, snippets } }) => `
    background-color: ${colors.black.background};
    color: ${colors.black.outline};
    cursor: pointer;
    display: block;
    font-family: ${fonts.fontFamily};
    font-size: ${fonts.lineHeight};
    font-weight: bold;
    line-height: calc(2 * ${fonts.lineHeight});
    padding: 0.5em;

    ${snippets.boxShadow({ colors, type: 'black' })}

    ${breakpoints['desktop']} {
      line-height: ${fonts.lineHeight};
    }
  `}
`

/** @component */
export default Button
