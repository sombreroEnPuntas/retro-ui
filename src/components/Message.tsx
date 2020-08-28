import { styled, Theme } from '../theme/theme'

interface Props {
  type: keyof Theme['colors']
}

export const Message = styled.div<Props>`
  ${({ theme: { colors, fonts }, type = 'black' }) => `
    color: ${colors[type].outline};
    font-family: ${fonts.fontFamily};
    font-size: 0.65em;
    font-weight: bold;
    line-height: calc(2 * ${fonts.lineHeight});
    `}
`

export default Message
