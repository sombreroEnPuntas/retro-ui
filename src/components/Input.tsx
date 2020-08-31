import { styled, Theme } from '../theme/theme'

interface Props {
  status?: keyof Theme['colors'] | 'disabled'
}

export const Input = styled.input.attrs(({ status }: Props) => ({
  disabled: status === 'disabled',
}))<Props>`
  ${({ theme: { breakpoints, colors, fonts, snippets }, status = 'black' }) => {
    const type = status === 'disabled' ? 'warning' : status
    return `
      border: none;
      font-family: ${fonts.fontFamily};
      font-size: ${fonts.lineHeight};
      line-height: calc(2 * ${fonts.lineHeight});
      outline-color: ${colors[type].outline};
      padding: 0.5rem 1rem;
      // https://caniuse.com/#feat=mdn-css_properties_width_stretch
      width: stretch;

      ${snippets.boxShadow({ colors, type })}

      ${breakpoints['desktop']} {
        line-height: ${fonts.lineHeight};
      }
    `
  }}
`

/** @component */
export default Input
