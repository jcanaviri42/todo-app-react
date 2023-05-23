import { useState } from 'react'

export function useToggle(initialValue = true) {
  const [visible, setVisible] = useState(initialValue)
  const toggle = () => setVisible((prevVisible) => !prevVisible)

  return [visible, toggle]
}
