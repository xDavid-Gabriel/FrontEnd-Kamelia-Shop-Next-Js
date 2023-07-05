import React, { FC, PropsWithChildren, useContext, useReducer } from 'react'
import { UiContext, uiReducer } from './'

export interface UiState {
  isModalCartOpen: boolean
  isModalUserOpen: boolean
  isModalFavoriteOpen: boolean
  isMenuOpen: boolean
}

const UI_INITIAL_STATE: UiState = {
  isModalCartOpen: false,
  isModalUserOpen: false,
  isModalFavoriteOpen: false,
  isMenuOpen: false,
}

export const UiProvider: FC<PropsWithChildren> = ({ children }) => {
  const [state, dispatch] = useReducer(uiReducer, UI_INITIAL_STATE)

  const toogleSideModalCart = () => {
    dispatch({ type: '[UI] - ToogleModalCart' })
  }

  const toogleSideModalUser = () => {
    dispatch({ type: '[UI] - ToogleModalUser' })
  }

  const toogleSideModalFavorite = () => {
    dispatch({ type: '[UI] - ToogleModalFavorite' })
  }

  const toogleSideMenu = () => {
    dispatch({ type: '[UI] - ToogleMenu' })
  }

  return (
    <UiContext.Provider
      value={{
        ...state,
        //Methods
        toogleSideModalCart,
        toogleSideModalUser,
        toogleSideModalFavorite,
        toogleSideMenu,
      }}
    >
      {children}
    </UiContext.Provider>
  )
}

export const useStateUiContext = () => useContext(UiContext)
