import { GoogleButton } from '@/components/buttons'
import { Wrapper } from './styles/provider-styled'
import { loginWithGoogle } from '@/services'
import { signIn } from '@/redux/slices/userSlice'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { privateRoutes } from '@/routes/stack-routes'
import { handleToastMessage } from '@/helpers'

export function SingProvider({ text }) {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const signInWithGoogle = async () => {
    await loginWithGoogle()
      .then((data) => {
        if (data !== undefined) {
          dispatch(signIn(data))
          navigate(`/private/${privateRoutes.DASHBOARD}`, { replace: true })
        }
      })
      .catch((e) => {
        handleToastMessage('error')
        console.log(e)
      })
  }

  return (
    <Wrapper>
      <span>{text}</span>
      <GoogleButton margin="10px 0px" onClick={() => signInWithGoogle()}>
        Google
      </GoogleButton>
      <p>
        By clicking “Continue with Email/Google” above, you acknowledge that you
        have read and understood, and agree to Terms & Conditions and Privacy
        Policy
      </p>
    </Wrapper>
  )
}
