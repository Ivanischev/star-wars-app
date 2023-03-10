import './App.scss'
import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { People } from './pages/People'
import { Starships } from './pages/Starships'
import { Planets } from './pages/Planets'
import { Login } from './pages/Login'
import { ErrorPage } from './pages/ErrorPage'
import { Header } from './components/Header'
import { Home } from './pages/Home'
import { AuthProvider } from './components/helpers/AuthProvider'
import { ProtectedRoute } from './components/helpers/ProtectedRoute'
import { ThemeProvider } from './components/helpers/ThemeProvider'

export const AuthContext = React.createContext(null)
export const ThemeContext = React.createContext(null)

const App = () => {
  return (
    <>
      <div className="App">
        <ThemeProvider>
          <AuthProvider>
            <Router>
              <Header />
              <Routes>
                <Route path="/" element={<Home />} />
                <Route
                  path="/People"
                  element={
                    <ProtectedRoute>
                      <People />
                    </ProtectedRoute>
                  }
                />
                <Route
                  path="/Starships"
                  element={
                    <ProtectedRoute>
                      <Starships />
                    </ProtectedRoute>
                  }
                />
                <Route
                  path="/Planets"
                  element={
                    <ProtectedRoute>
                      <Planets />
                    </ProtectedRoute>
                  }
                />
                <Route path="/Login" element={<Login />} />
                <Route path="/*" element={<ErrorPage />} />
              </Routes>
            </Router>
          </AuthProvider>
        </ThemeProvider>
      </div>
    </>
  )
}

export default App
