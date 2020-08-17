Modal

```jsx
import Button from './Button'
const [open, setOpen] = React.useState(false)
const toggle = () => setOpen(!open)
;<div>
  <Modal open={open}>
    <Button onClick={toggle}>🦕</Button>
  </Modal>
  <Button onClick={toggle}>Rawr!</Button>
</div>
```
