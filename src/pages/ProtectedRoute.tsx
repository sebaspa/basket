import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'
import { type RootState } from '../store'

export const ProtectedRoute = ({ children }: any): any => {
  const { user } = useSelector((store: RootState) => store.user)
  if (user === null) {
    return <Navigate to="/" />
  }
  return children
}
