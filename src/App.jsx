import { lazy, Suspense } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import { RoutesWithNotFound } from '@/routes/routes-with-notfound'
import { privateRoutes, publicRoutes } from '@/routes/stack-routes'
import { ThemeProviders } from '@/providers/theme-provider'
import Layout from '@/components/layout'
import { Provider } from 'react-redux'
import AuthGuard from '@/guards/authentication-guard'
import store from '@/redux/store'
import Home from '@/pages/home'
import Login from '@/pages/auth/Login'
import Register from '@/pages/auth/Register'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const Private = lazy(() => import('@/pages/private'))

function App() {
  return (
    <Provider store={store}>
      <Suspense fallback={<p>Cargando...</p>}>
        <ThemeProviders>
          <Layout>
            <BrowserRouter>
              <RoutesWithNotFound>
                <Route path={publicRoutes.HOME}>
                  <Route index element={<Home />} />
                  <Route path={publicRoutes.LOGIN} element={<Login />} />
                  <Route path={publicRoutes.REGISTER} element={<Register />} />
                </Route>

                <Route element={<AuthGuard />}>
                  <Route
                    path={`${privateRoutes.PRIVATE}/*`}
                    element={<Private />}
                  />
                </Route>
              </RoutesWithNotFound>
            </BrowserRouter>
          </Layout>
        </ThemeProviders>
      </Suspense>

      {/* Administrador de notificaciones */}
      <ToastContainer
        position="bottom-right"
        hideProgressBar={true}
        theme="colored"
      />
    </Provider>
  )
}

export default App
