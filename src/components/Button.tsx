import styled from 'styled-components'

export const Button = styled.button`
  ${({ theme: { colors } }) => `
    background-color: ${colors.black.background};
    box-shadow: 4px 0 ${colors.black.shadow},
      0 -4px ${colors.black.shadow},
      -4px 0 ${colors.black.shadow},
      0 4px ${colors.black.shadow};
    display: block;
    margin: 0.5em;
    padding: 0.5em;
    color: ${colors.black.outline};
    font-size: 0.65em;
    font-weight: bold;
    cursor: pointer;
    height: 100%;`}
`

/** @component */
export default Button
