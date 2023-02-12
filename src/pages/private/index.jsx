import { lazy } from 'react'
import { Navigate, Route } from 'react-router-dom'
import { RoutesWithNotFound } from '@/routes/routes-with-notfound'
import { privateRoutes } from '@/routes/stack-routes'

const Dashboard = lazy(() => import('@/pages/private/dashboard'))

export default function Private() {
  return (
    <RoutesWithNotFound>
      <Route path="/" element={<Navigate to={privateRoutes.DASHBOARD} />} />
      <Route path={privateRoutes.DASHBOARD} element={<Dashboard />} />
    </RoutesWithNotFound>
  )
}
