export const boxShadow = ({
  colors,
  type,
}: {
  colors: {
    [key: string]: {
      shadow: string
    }
  }
  type: string
}) => `
  box-shadow: \
    0 4px ${colors[type].shadow}, \
    0 -4px ${colors[type].shadow}, \
    4px 0 ${colors[type].shadow}, \
    -4px 0 ${colors[type].shadow};
  margin: 4px;
`
