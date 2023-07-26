import React, {
  FC,
  PropsWithChildren,
  useContext,
  useEffect,
  useReducer,
} from 'react'
import { UiContext, uiReducer } from './'
import { Search } from '../../api'

export interface UiState {
  isModalCartOpen: boolean
  isModalUserOpen: boolean
  isModalFavoriteOpen: boolean
  isMenuOpen: boolean
  searchHistory: string[]
}

const UI_INITIAL_STATE: UiState = {
  isModalCartOpen: false,
  isModalUserOpen: false,
  isModalFavoriteOpen: false,
  isMenuOpen: false,
  searchHistory: [],
}

const searchCtrl = new Search()
// const productCtrl = new Product()

export const UiProvider: FC<PropsWithChildren> = ({ children }) => {
  const [state, dispatch] = useReducer(uiReducer, UI_INITIAL_STATE)

  const getSearchTerm = () => {
    const searchItem: string[] = searchCtrl.getAll() || '[]'

    dispatch({ type: '[UI] - Fetch Search History', payload: searchItem })
  }

  useEffect(() => {
    getSearchTerm()
  }, [])

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

  const addToSearchHistory = (searchTerm: string) => {
    searchCtrl.add(searchTerm)
    dispatch({
      type: '[UI] - Fetch Search History',
      payload: searchCtrl.getAll(),
    })
  }
  const removeItem = (text: string) => {
    searchCtrl.removeItem(text)
    dispatch({
      type: '[UI] - Fetch Search History',
      payload: searchCtrl.getAll(),
    })
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
        addToSearchHistory,
        removeItem,
      }}
    >
      {children}
    </UiContext.Provider>
  )
}

export const useStateUiContext = () => useContext(UiContext)
