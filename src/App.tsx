import { ThemeProvider } from '@mui/material'
import { I18nextProvider } from 'react-i18next'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import { AuthProvider } from './components/AuthUserContext'
import i18n from './config/i18n'
import { theme } from './config/material-ui.config'
import './config/yup-location.config'
import Login from './views/public/Home'

function App() {
  return (
    <BrowserRouter>
      <I18nextProvider i18n={i18n}>
        <ThemeProvider theme={theme}>
          <AuthProvider>
            <Routes>
              <Route path="/" element={<div> home</div>} />
              <Route path="/login" element={<Login />} />
              <Route path="*" element={<Navigate to="/login" />} />
            </Routes>
          </AuthProvider>
        </ThemeProvider>
      </I18nextProvider>
    </BrowserRouter>
  )
}

export default App
