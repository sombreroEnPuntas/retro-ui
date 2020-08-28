import { styled } from '../theme/theme'

interface Props {
  open?: boolean
}
const Modal = styled.div<Props>`
  ${({ theme: { colors }, open = true }) => `
    align-items: center;
    /**
     * Alpha hex colors are here already!
     * https://caniuse.com/#feat=css-rrggbbaa
     */
    background-color: ${colors.black.shadow}66;
    display: ${open ? 'flex' : 'none'};
    height: 100%;
    justify-content: center;
    left: 0;
    overflow: auto;
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 1;
  `}
`

/** @component */
export default Modal
