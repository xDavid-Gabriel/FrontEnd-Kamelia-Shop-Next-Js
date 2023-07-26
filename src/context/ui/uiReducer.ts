import { UiState } from '.'
type UiActionType =
  | { type: '[UI] - ToogleModalCart' }
  | { type: '[UI] - ToogleModalUser' }
  | { type: '[UI] - ToogleModalFavorite' }
  | { type: '[UI] - ToogleMenu' }
  | { type: '[UI] - Fetch Search History'; payload: string[] }

export const uiReducer = (state: UiState, action: UiActionType): UiState => {
  switch (action.type) {
    case '[UI] - ToogleModalCart':
      return { ...state, isModalCartOpen: !state.isModalCartOpen }

    case '[UI] - ToogleModalUser':
      return { ...state, isModalUserOpen: !state.isModalUserOpen }

    case '[UI] - ToogleModalFavorite':
      return { ...state, isModalFavoriteOpen: !state.isModalFavoriteOpen }

    case '[UI] - ToogleMenu':
      return { ...state, isMenuOpen: !state.isMenuOpen }

    case '[UI] - Fetch Search History':
      return {
        ...state,
        searchHistory: [...action.payload],
      }
    default:
      return state
  }
}
