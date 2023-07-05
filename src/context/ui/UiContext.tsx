import { createContext } from 'react'

interface ContextProps {
  isModalCartOpen: boolean
  isModalUserOpen: boolean
  isModalFavoriteOpen: boolean
  isMenuOpen: boolean
  //Methods
  toogleSideModalCart: () => void
  toogleSideModalUser: () => void
  toogleSideModalFavorite: () => void
  toogleSideMenu: () => void
}

export const UiContext = createContext({} as ContextProps)
