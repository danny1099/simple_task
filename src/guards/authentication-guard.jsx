/* eslint-disable */
import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router-dom'
import { publicRoutes } from '@/routes/stack-routes'

const AuthGuard = () => {
  const userLogged = useSelector((state) => state.users)
  console.log(userLogged)

  return userLogged.uid ? <Outlet /> : <Navigate to={`${publicRoutes.LOGIN}`} />
}

export default AuthGuard
