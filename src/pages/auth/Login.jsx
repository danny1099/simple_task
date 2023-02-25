import { H2 } from '@/components/text'
import { Button } from '@/components/buttons'
import { TextInput, InputPassword } from '@/components/inputs'
import { Navbar } from '@/components/nabvar'
import { MdOutlineMailOutline } from 'react-icons/md'
import { useNavigate } from 'react-router-dom'
import { privateRoutes, publicRoutes } from '@/routes/stack-routes'
import { useForm } from '@/hooks'
import { loginWithCredentials } from '@/services'
import { signIn } from '@/redux/slices/userSlice'
import { useDispatch } from 'react-redux'
import { SingProvider } from '@/pages/auth/components/SingProvider'
import { Container, Content, Wrapper } from '@/pages/auth/styles'

const NAVIGATE_LINKS = [
  {
    id: 1,
    href: `${publicRoutes.REGISTER}`,
    text: 'Try Free',
    variant: 'primary'
  },
  { id: 2, href: `${publicRoutes.HOME}`, text: 'Home', variant: 'default' }
]

export default function Login() {
  const [values, handleInputChange, errors] = useForm({})
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()

    /* Setea los valores de los inputs */
    !errors && loginWithEmailAndPassword()
  }

  const loginWithEmailAndPassword = async () => {
    const { email, password } = values

    await loginWithCredentials(email, password).then((data) => {
      if (data !== undefined) {
        dispatch(signIn(data))
        navigate(`/private/${privateRoutes.DASHBOARD}`, { replace: false })
      }
    })
  }

  return (
    <Container>
      <Navbar showTittle={true} routes={NAVIGATE_LINKS} />

      <Content>
        <Wrapper>
          <H2 text="Log in" size="3rem" />
          <form onSubmit={handleSubmit}>
            <TextInput
              name="email"
              label="Email"
              type="email"
              placeholder="Enter your email address..."
              onChange={handleInputChange}
              helperText={errors.email?.message}
              helperColor={errors.email?.status}
              contentRight={<MdOutlineMailOutline fill="#7a7a7a" />}
              width="100%"
              required
            />
            <InputPassword
              name="password"
              label="Password"
              placeholder="Enter your current password..."
              onChange={handleInputChange}
              helperText={errors.password?.message}
              helperColor={errors.password?.status}
              width="100%"
              required
            />
            <Button
              variant="primary"
              height="40px"
              width="100%"
              br="20px"
              margin="10px 0 0 0"
            >
              Sing in with email
            </Button>
          </form>
        </Wrapper>

        {/* Component to sing with google */}
        <SingProvider text="Or Sing in with" />
      </Content>
    </Container>
  )
}
