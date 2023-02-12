import Footer from '@/components/footer'
import { Container } from './styles/layout-styled'

export default function Layout({ children }) {
  return (
    <Container>
      {children}
      <Footer />
    </Container>
  )
}
