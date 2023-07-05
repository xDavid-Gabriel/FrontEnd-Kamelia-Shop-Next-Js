import { FC, PropsWithChildren, useReducer, useContext } from 'react'
import { AuthContext, authReducer } from './'
import Cookies from 'js-cookie'
import axios from 'axios'
import { useRouter } from 'next/router'

export interface AuthState {
  isLoggedIn: boolean
}

const AUTH_INITIAL_STATE: AuthState = {
  isLoggedIn: false,
}

export const AuthProvider: FC<PropsWithChildren> = ({ children }) => {
  const router = useRouter()
  const [state, dispatch] = useReducer(authReducer, AUTH_INITIAL_STATE)

  return (
    <AuthContext.Provider
      value={{
        ...state,
        //Methods
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export const useStateAuthContext = () => useContext(AuthContext)
