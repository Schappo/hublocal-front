import { ApiResponse } from 'apisauce'
import React, {
  createContext,
  ReactElement,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react'
import {
  getObject,
  removeObject,
  setObject,
} from '../../helpers/storage.helper'
import { setAuthorizationToken } from '../../service/api-config'
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
  const [user, setUser] = useState<User | null>(getObject<User>('user'))
  const [accessToken, setAccessToken] = useState<string | null>(
    getObject<string>('accessToken'),
  )
  const [isAuthenticatedUser, setIsAuthenticatedUser] = useState(
    Boolean(getObject('accessToken')),
  )

  const persistAuth = (isAuth: boolean, accessToken: string) => {
    setObject('accessToken', accessToken)
    setIsAuthenticatedUser(isAuth)
  }

  const persistUser = (user: User) => {
    setObject('user', JSON.stringify(user))
    setUser(user)
  }

  const signIn = async (
    credentials: CredentialType,
  ): Promise<ApiResponse<SignIn | ErrorResponse>> => {
    const resp = await serviceSignIn(credentials)
    if (resp.ok) {
      // if resp.ok is true, resp.data is not null
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const { accessToken, user } = resp.data!
      persistAuth(true, accessToken)
      persistUser(user)
      setAccessToken(accessToken)
      setAuthorizationToken(accessToken)
    }

    return resp
  }

  useEffect(() => {
    if (accessToken) {
      setAuthorizationToken(accessToken)
    }
  }, [accessToken])

  const logout = () => {
    clearLocalStorage()
    setUser(null)
    setIsAuthenticatedUser(false)
  }

  const clearLocalStorage = () => {
    removeObject('accessToken')
    removeObject('user')
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
