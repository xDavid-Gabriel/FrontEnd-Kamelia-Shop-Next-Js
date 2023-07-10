import { FC, PropsWithChildren, useReducer, useContext, useEffect } from 'react'
import { AuthContext, authReducer } from './'
import Cookies from 'js-cookie'
import axios from 'axios'
import { useRouter } from 'next/router'
import { IUser } from '../../interfaces'
import { Token, User } from '../../api'

export interface AuthState {
  accessToken: string
  user: IUser
}

const AUTH_INITIAL_STATE: AuthState = {
  accessToken: '',
  user: {},
}

const tokenCtrl = new Token()
const userCtrl = new User()

export const AuthProvider: FC<PropsWithChildren> = ({ children }) => {
  const router = useRouter()
  const [state, dispatch] = useReducer(authReducer, AUTH_INITIAL_STATE)
  useEffect(() => {
    const checkToken = async () => {
      const token = tokenCtrl.getToken()
      if (!token) {
        logout()
        return
      }
      if (tokenCtrl.hasExpired(token)) {
        logout()
        return
      } else {
        await login(token)
      }
    }
    checkToken()
  }, [])

  const login = async (token: string) => {
    try {
      tokenCtrl.setToken(token)
      // Obtener los datos del usuario
      const response = await userCtrl.getMe()
      console.log({ response })

      // Guardar los datos del usuario en el estado
      dispatch({ type: '[Auth] - Fetch User', payload: response })
      //Guardar la token
      dispatch({ type: '[Auth] - Fetch Token', payload: token })
    } catch (error) {
      console.log(error)
    }
  }

  const logout = () => {
    tokenCtrl.removeToken()
    dispatch({ type: '[Auth] - Fetch Token', payload: '' })
    dispatch({ type: '[Auth] - Fetch User', payload: {} })
  }

  return (
    <AuthContext.Provider
      value={{
        ...state,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export const useStateAuthContext = () => useContext(AuthContext)
