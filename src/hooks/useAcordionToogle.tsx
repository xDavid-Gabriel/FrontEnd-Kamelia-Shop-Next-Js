import { useState } from 'react'

export const useAcordionToogle = (initialState: boolean) => {
  const [open, setOpen] = useState<boolean | number>(initialState)

  //Funcionara cuando se de clic
  const toggle = (index: boolean | number) => {
    if (open === index) {
      setOpen(false) // Colapsar todos los acordeones
    } else {
      setOpen(index)
    }
  }

  return { open, toggle, setOpen }
}
