import { useAuth } from './useAuth'
import { Navigate } from 'react-router-dom'

export const ProtectedRoute = ({ children }) => {
  const { token } = useAuth()

  if (!token) {
    return <Navigate to="/home" replace />
  }

  return children
}
