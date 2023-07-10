import { createContext } from 'react'
import { IUser } from '../../interfaces'

interface ContextProps {
  accessToken: string
  user: IUser
  login: (token: string) => Promise<void>
  logout: () => void
}

export const AuthContext = createContext({} as ContextProps)
