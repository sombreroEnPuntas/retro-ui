import React from 'react'
import styled from 'styled-components'

export type MessageType = 'black' | 'error'

interface Props {
  type: MessageType
}

export const BoxWrapper = styled.pre<Props>`
  ${({ theme: { colors }, type }) => `
    background-color: ${colors[type].background};
    box-shadow: 4px 0 ${colors[type].shadow},
      0 -4px ${colors[type].shadow},
      -4px 0 ${colors[type].shadow},
      0 4px ${colors[type].shadow};
    display: block;
    margin: 0.5em;
    overflow-x: auto;
    padding: 0.5em;
    white-space: pre-wrap;
    max-width: 450px;`}
`

export const MessageWrapper = styled.code<Props>`
  ${({ theme: { colors, fonts }, type }) => `
    font-family: ${fonts.fontFamily};
    color: ${colors[type].outline};
    font-size: 0.65em;
    font-weight: bold;
    display: flex;
    justify-content: space-between;
    align-items: center;`}
`

export const Box: React.FunctionComponent<{ error?: boolean }> = ({
  children,
  error,
}) => (
  <BoxWrapper type={error ? 'error' : 'black'}>
    <MessageWrapper type={error ? 'error' : 'black'}>{children}</MessageWrapper>
  </BoxWrapper>
)

export default Box
