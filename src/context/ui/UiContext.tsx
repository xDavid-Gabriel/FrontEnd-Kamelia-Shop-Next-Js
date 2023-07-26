import { createContext } from 'react'

interface ContextProps {
  isModalCartOpen: boolean
  isModalUserOpen: boolean
  isModalFavoriteOpen: boolean
  isMenuOpen: boolean
  searchHistory: string[]
  //Methods
  toogleSideModalCart: () => void
  toogleSideModalUser: () => void
  toogleSideModalFavorite: () => void
  toogleSideMenu: () => void
  addToSearchHistory: (searchTerm: string) => void
  removeItem: (text: string) => void
}

export const UiContext = createContext({} as ContextProps)
