import { Navbar } from '@/components/nabvar'
import { NavLink } from '@/components/navlink'
import { Separator } from '@/components/separator'
import { ToggleTheme } from '@/components/toggle'
import { H2 } from '@/components/text'
import { Button } from '@/components/buttons'
import { TextInput, InputPassword } from '@/components/inputs'
import { MdOutlineMailOutline } from 'react-icons/md'
import { useNavigate } from 'react-router-dom'
import { privateRoutes, publicRoutes } from '@/routes/stack-routes'
import { SingProvider } from '@/pages/auth/components/SingProvider'
import { registerWithCredentials } from '@/services'
import { useForm } from '@/hooks/useForm'
import { signIn } from '@/redux/slices/userSlice'
import { useDispatch } from 'react-redux'
import { Container, Content, Wrapper } from '@/pages/auth/styles'

const NAVIGATE_LINKS = [
  {
    id: 1,
    href: `${publicRoutes.LOGIN}`,
    text: 'Log in',
    variant: 'primary'
  },
  { id: 2, href: `${publicRoutes.HOME}`, text: 'Home', variant: 'default' }
]

export default function Register() {
  const [values, handleInputChange, errors] = useForm({})
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()

    /* Setea los valores de los inputs */
    !errors && registerWithEmailAndPassword()
  }

  const registerWithEmailAndPassword = async () => {
    const { email, password } = values

    await registerWithCredentials(email, password).then((data) => {
      if (data !== undefined) {
        dispatch(signIn(data))
        navigate(`/private/${privateRoutes.DASHBOARD}`, { replace: false })
      }
    })
  }

  return (
    <Container>
      <Navbar>
        {NAVIGATE_LINKS.map(({ id, href, text, variant }) => {
          return <NavLink key={id} to={href} text={text} variant={variant} />
        })}

        <Separator />
        <ToggleTheme />
      </Navbar>

      <Content>
        <Wrapper>
          <H2 text="Sign up" size="3rem" />
          <form onSubmit={handleSubmit}>
            <TextInput
              required
              name="email"
              label="Email"
              placeholder="Enter your email address..."
              type="email"
              onChange={handleInputChange}
              helperText={errors.email?.message}
              helperColor={errors.email?.status}
              contentRight={<MdOutlineMailOutline fill="#7a7a7a" />}
              width="100%"
            />
            <InputPassword
              required
              name="password"
              label="Password"
              placeholder="Enter your current password..."
              onChange={handleInputChange}
              helperText={errors.password?.message}
              helperColor={errors.password?.status}
              width="100%"
            />
            <Button
              type="submit"
              variant="primary"
              height="40px"
              width="100%"
              br="20px"
              margin="10px 0 0 0"
            >
              Continue with email
            </Button>
          </form>
        </Wrapper>

        {/* Component to sing with google */}
        <SingProvider text="Or Sing up with" />
      </Content>
    </Container>
  )
}
