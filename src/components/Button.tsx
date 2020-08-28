import { styled } from '../theme/theme'

export const Button = styled.button`
  ${({ theme: { colors, fonts, snippets } }) => `
    background-color: ${colors.black.background};
    color: ${colors.black.outline};
    cursor: pointer;
    display: block;
    font-family: ${fonts.fontFamily};
    font-size: 0.65em;
    font-weight: bold;
    line-height: calc(2 * ${fonts.lineHeight});
    padding: 0.5em;

    ${snippets.boxShadow({ colors, type: 'black' })}
  `}
`

/** @component */
export default Button
