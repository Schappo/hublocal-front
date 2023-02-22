import { ApiResponse } from 'apisauce'
import React, {
  createContext,
  ReactElement,
  useContext,
  useMemo,
  useState,
} from 'react'
import { signIn as serviceSignIn } from '../../service/auth'
import { CredentialType, ErrorResponse, SignIn } from '../../types'
import { User } from '../../types/entity.type'

type ContextType = {
  signIn: (
    credentials: CredentialType,
  ) => Promise<ApiResponse<SignIn | ErrorResponse>>
  user?: User | null
  setUser?: (user: User | null) => void
  isAuthenticatedUser: boolean
  logout: () => void
}

type AuthProviderProps = {
  children: React.ReactNode
}

const AuthContext = createContext({})

function AuthProvider({
  children,
}: AuthProviderProps): ReactElement<AuthProviderProps> {
  const [user, setUser] = useState<User | null>(null)
  const [isAuthenticatedUser, setIsAuthenticatedUser] = useState(false)

  const persistAuth = (isAuth: boolean, access_token: string) => {
    localStorage.setItem('isAuthenticatedUser', JSON.stringify(isAuth))
    localStorage.setItem('access_token', JSON.stringify(access_token))
    setIsAuthenticatedUser(isAuth)
  }

  const persistUser = (user: User) => {
    localStorage.setItem('user', JSON.stringify(user))
    setUser(user)
  }

  const signIn = async (
    credentials: CredentialType,
  ): Promise<ApiResponse<SignIn | ErrorResponse>> => {
    const resp = await serviceSignIn(credentials)
    if (resp.ok) {
      // if resp.ok is true, resp.data is not null
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const { access_token, user } = resp.data!
      persistAuth(true, access_token)
      persistUser(user)
    }

    return resp
  }

  const logout = () => {
    clearLocalStorage()
    setUser(null)
    setIsAuthenticatedUser(false)
  }

  const clearLocalStorage = () => {
    localStorage.removeItem('isAuthenticatedUser')
    localStorage.removeItem('access_token')
    localStorage.removeItem('user')
  }

  const memoizedValue = useMemo(
    () => ({ signIn, user, setUser, isAuthenticatedUser, logout }),
    [user, isAuthenticatedUser],
  )

  return (
    <AuthContext.Provider value={memoizedValue}>
      {children}
    </AuthContext.Provider>
  )
}

function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error('useAuth must be used within a AuthProvider')
  }
  return context as ContextType
}

export { AuthProvider, useAuth }
