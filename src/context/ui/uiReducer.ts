import { UiState } from '.'
type UiActionType =
  | { type: '[UI] - ToogleModalCart' }
  | { type: '[UI] - ToogleModalUser' }
  | { type: '[UI] - ToogleModalFavorite' }
  | { type: '[UI] - ToogleMenu' }

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
    default:
      return state
  }
}
