import { ReactElement } from 'react'
import { Navigate, Route, Routes as RouterDomRoutes } from 'react-router-dom'
import { useAuth } from '../components/AuthUserContext'
import Home from '../views/Home'
import { authRoutes } from './auth.routes'

function Routes(): ReactElement {
  const { isAuthenticatedUser } = useAuth()
  return (
    <RouterDomRoutes>
      {isAuthenticatedUser &&
        authRoutes.map((route, index) => (
          <Route key={index} path={route.path} element={<route.component />} />
        ))}
      <Route path="/login" element={<Home />} />
      <Route path="*" element={<Navigate to="/login" />} />
    </RouterDomRoutes>
  )
}

export default Routes
