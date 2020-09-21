import React, { ComponentProps, HTMLProps } from 'react'
import { styled, Theme } from '../theme/theme'

interface LabelProps extends HTMLProps<HTMLLabelElement> {
  multiple?: boolean
  type?: keyof Theme['colors']
}
const Label = styled.label<LabelProps>`
  ${({ theme: { colors, breakpoints, fonts }, multiple, type = 'black' }) => `
    font-family: ${fonts.fontFamily};

    &::after {
      box-shadow: 3px 3px, 6px 3px, 9px 3px, 12px 3px, 15px 3px, 6px 6px, 9px 6px,
        12px 6px, 9px 9px;
      color: ${multiple ? 'transparent' : colors[type].outline};
      content: '';
      display: block;
      height: 3px;
      pointer-events: none;
      position: relative;
      top: calc(-2.2 * ${fonts.lineHeight});
      left: calc(100% - 23px);
      width: 3px;

      ${breakpoints['desktop']} {
        top: calc(-1.5 * ${fonts.lineHeight});
      }
    }
  `}
`

interface SelectProps extends HTMLProps<HTMLSelectElement> {
  status?: keyof Theme['colors'] | 'disabled'
}
const Select = styled.select.attrs(({ status }: SelectProps) => ({
  disabled: status === 'disabled',
}))<SelectProps>`
  ${({ theme: { breakpoints, colors, fonts, snippets }, status = 'black' }) => {
    const type = status === 'disabled' ? 'warning' : status
    return `
      appearance: none;
      background-color: ${
        colors[status === 'disabled' ? 'warning' : 'black'].background
      };
      border: none;
      font-family: ${fonts.fontFamily};
      font-size: ${fonts.lineHeight};
      line-height: calc(2 * ${fonts.lineHeight});
      outline-color: ${colors[type].outline};
      overflow: hidden;
      padding: 0.5rem 1rem;
      text-overflow: ellipsis;
      // https://caniuse.com/#feat=mdn-css_properties_width_stretch
      width: stretch;

      /* Hide arrow icon in IE browsers */
      &::-ms-expand {
        display: none;
      }

      ${snippets.boxShadow({ colors, type })}

      ${breakpoints['desktop']} {
        line-height: ${fonts.lineHeight};
      }

      & option {
        background-color: ${colors.black.background};
        color: ${colors.black.outline};
        overflow: hidden;
        text-overflow: ellipsis;
      }
      & option:checked {
        background-color: ${colors.black.backgroundAlt};
        color: ${colors.black.outline};
      }
    `
  }}
`

const Wrapper = (props: ComponentProps<typeof Select>) => (
  <Label
    multiple={props.multiple}
    type={props.status === 'disabled' ? 'warning' : props.status}
  >
    {props.name}
    <Select {...props} />
  </Label>
)

/** @component */
export default Wrapper
