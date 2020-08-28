import { styled, Theme } from '../theme/theme'

interface Props {
  status?: keyof Theme['colors'] | 'disabled'
}

export const Input = styled.input.attrs(({ status }: Props) => ({
  disabled: status === 'disabled',
}))<Props>`
  ${({ theme: { colors, fonts, snippets }, status = 'black' }) => {
    const type = status === 'disabled' ? 'warning' : status
    return `
      border: none;
      font-family: ${fonts.fontFamily};
      line-height: ${fonts.lineHeight};
      outline-color: ${colors[type].outline};
      padding: 0.5rem 1rem;

      ${snippets.boxShadow({ colors, type })}
    `
  }}
`

/** @component */
export default Input
