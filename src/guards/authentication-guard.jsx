import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router-dom'
import { publicRoutes } from '@/routes/stack-routes'

const AuthGuard = () => {
  const userLogged = useSelector((state) => state.users)

  return userLogged.isLogged ? (
    <Outlet />
  ) : (
    <Navigate to={`${publicRoutes.LOGIN}`} />
  )
}

export default AuthGuard
