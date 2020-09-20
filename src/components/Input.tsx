import React, { ComponentProps, HTMLProps } from 'react'
import { styled, Theme } from '../theme/theme'

interface LabelProps extends HTMLProps<HTMLLabelElement> {}
const Label = styled.label<LabelProps>`
  ${({ theme: { fonts } }) => `
    font-family: ${fonts.fontFamily};
  `}
`
interface InputProps {
  status?: keyof Theme['colors'] | 'disabled'
}

const Input = styled.input.attrs(({ status }: InputProps) => ({
  disabled: status === 'disabled',
}))<InputProps>`
  ${({ theme: { breakpoints, colors, fonts, snippets }, status = 'black' }) => {
    const type = status === 'disabled' ? 'warning' : status
    return `
      border: none;
      background-color: ${
        colors[status === 'disabled' ? 'warning' : 'black'].background
      };
      font-family: ${fonts.fontFamily};
      font-size: ${fonts.lineHeight};
      line-height: calc(2 * ${fonts.lineHeight});
      outline-color: ${colors[type].outline};
      overflow: hidden;
      padding: 0.5rem 1rem;
      text-overflow: ellipsis;
      // https://caniuse.com/#feat=mdn-css_properties_width_stretch
      width: stretch;

      ${snippets.boxShadow({ colors, type })}

      ${breakpoints['desktop']} {
        line-height: ${fonts.lineHeight};
      }
    `
  }}
`

const Wrapper = (props: ComponentProps<typeof Input>) => (
  <Label>
    {props.name}
    <Input {...props} />
  </Label>
)

/** @component */
export default Wrapper
