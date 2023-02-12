import { useNavigate } from 'react-router-dom'
import { publicRoutes } from '@/routes/stack-routes'
import { Navbar } from '@/components/nabvar'
import { NavLink } from '@/components/navlink'
import { Separator } from '@/components/separator'
import { ToggleTheme } from '@/components/toggle'
import { P } from '@/components/text'
import { Button } from '@/components/buttons/Button'
import { TitleGradient } from '@/components/title/TitleGradient'
import { Container, Content, ContentIntro, ContentView } from './styles'

const NAVIGATE_LINKS = [
  {
    id: 1,
    href: `${publicRoutes.REGISTER}`,
    text: 'Try Free',
    variant: 'primary'
  },
  { id: 2, href: `${publicRoutes.LOGIN}`, text: 'Log in', variant: 'default' }
]

export default function Home() {
  const navigate = useNavigate()

  const handleTryFreeButton = () => {
    navigate(`/${publicRoutes.REGISTER}`, { replace: false })
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
        <ContentIntro>
          <TitleGradient
            size="3.5rem"
            text="Create your tasks. keep up to date"
          />
          <P margin="1rem 0">
            Simple Task is easy to use. It helps you to have your pending tasks
            visually and order them to your needs.
          </P>
          <Button variant="primary" width="250px" onClick={handleTryFreeButton}>
            Try Free
          </Button>
        </ContentIntro>

        <ContentView>
          <img
            src="./background-intro.svg"
            alt="Simple Task,It helps you to have your pending tasks
            visually and order them to your needs "
            loading="lazy"
          />
        </ContentView>
      </Content>
    </Container>
  )
}
