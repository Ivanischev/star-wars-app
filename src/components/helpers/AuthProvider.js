import { useState } from 'react'
import { AuthContext } from '../../App'

export const AuthProvider = ({ children }) => {
  const fakeAuth = () =>
    new Promise((resolve) => {
      setTimeout(() => resolve('123'), 250)
    })

  const [token, setToken] = useState(null)

  const handleLogin = async () => {
    const token = await fakeAuth()

    setToken(token)
  }

  const handleLogout = () => {
    setToken(null)
  }

  const value = {
    token,
    onLogin: handleLogin,
    onLogout: handleLogout,
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}
