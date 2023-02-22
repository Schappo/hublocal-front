import React, {
  createContext,
  ReactElement,
  useContext,
  useMemo,
  useState,
} from 'react'
import { signIn as serviceSignIn } from '../../service/auth'
import { CredentialType } from '../../types'

const AuthContext = createContext({})

type AuthProviderProps = {
  children: React.ReactNode
}

function AuthProvider({
  children,
}: AuthProviderProps): ReactElement<AuthProviderProps> {
  const [user, setUser] = useState(null)
  const [isAuthUser, setIsAuthUser] = useState(false)

  const persistAuth = (isAuth: boolean, access_token: string) => {
    localStorage.setItem('isAuthUser', JSON.stringify(isAuthUser))
    localStorage.setItem('access_token', JSON.stringify(access_token))
    setIsAuthUser(isAuth)
  }

  const signIn = async (credentials: CredentialType) => {
    const resp = await serviceSignIn(credentials)
    if (resp.ok) {
      // if resp.ok is true, resp.data is not null
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const { access_token } = resp.data!
      persistAuth(true, access_token)
    }
    return resp
  }

  const memoizedValue = useMemo(() => ({ signIn, user, setUser }), [user])

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
  return context
}

export { AuthProvider, useAuth }
