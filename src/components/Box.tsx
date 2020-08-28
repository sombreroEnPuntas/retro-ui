import { styled, Theme } from '../theme/theme'

interface Props {
  type: keyof Theme['colors']
}

export const Box = styled.div<Props>`
  ${({ theme: { colors, fonts, snippets }, type = 'black' }) => `
    background-color: ${colors[type].background};
    color: ${colors[type].outline};
    font-family: ${fonts.fontFamily};
    font-size: 0.65em;
    font-weight: bold;
    line-height: calc(2 * ${fonts.lineHeight});
    overflow-x: auto;
    padding: 0.5rem 1rem;
    white-space: pre-wrap;

    ${snippets.boxShadow({ colors, type })}
  `}
`

export default Box
