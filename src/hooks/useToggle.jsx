import { useState } from 'react'

function useToggle(initialValue = true) {
  const [visible, setVisible] = useState(initialValue)

  const toggle = () => setVisible((prevVisible) => !prevVisible)

  return [visible, toggle]
}

export { useToggle }
