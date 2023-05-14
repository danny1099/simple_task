import { useNavigate } from 'react-router-dom'
import { publicRoutes } from '@/routes/stack-routes'
import { P } from '@/components/text'
import { Navbar } from '@/components/nabvar'
import { Button } from '@/components/buttons/Button'
import { TitleGradient } from '@/components/title/TitleGradient'
import { Container, Content, ContentIntro, ContentView } from './styles'
import { withHead } from '@/hoc/withHead'

const NAVIGATE_LINKS = [
  {
    id: 1,
    href: `/${publicRoutes.REGISTER}`,
    text: 'Try Free',
    variant: 'primary'
  },
  { id: 2, href: `/${publicRoutes.LOGIN}`, text: 'Log in', variant: 'default' }
]

function Home() {
  const navigate = useNavigate()

  const handleTryFreeButton = () => {
    navigate(`/${publicRoutes.REGISTER}`, { replace: true })
  }

  return (
    <Container>
      <Navbar showTittle={true} routes={NAVIGATE_LINKS} />

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

export default withHead(Home, { title: 'Home' })
