import styled from 'styled-components'

interface Props {
  status?: 'error' | 'success'
}

export const Input = styled.input<Props>`
  ${({ theme: { colors, fonts }, disabled, status }) => `
    background-color: ${
      disabled ? colors.disabled : colors[status || 'black'].background
    };
    border: none;
    box-shadow: 0 4px ${colors[status || 'black'].shadow},
      0 -4px ${colors[status || 'black'].shadow},
      4px 0 ${colors[status || 'black'].shadow},
      -4px 0 ${colors[status || 'black'].shadow};
    font-family: ${fonts.fontFamily};
    line-height: calc(2 * ${fonts.lineHeight});
    margin: 4px;
    outline-color: ${colors[status || 'black'].outline};
    padding: 0.5rem 1rem;
    `}
`

/** @component */
export default Input
