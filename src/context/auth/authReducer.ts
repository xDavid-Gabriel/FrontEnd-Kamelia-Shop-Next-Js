import { AuthState } from './'

type AuthActionType =
  | {
      type: '[Auth] - Login'
      payload: ''
    }
  | {
      type: '[Auth] - Logout'
    }

export const authReducer = (
  state: AuthState,
  action: AuthActionType,
): AuthState => {
  switch (action.type) {
    case '[Auth] - Login':
      return {
        ...state,
      }
    case '[Auth] - Logout':
      return {
        ...state,
      }
    default:
      return state
  }
}
