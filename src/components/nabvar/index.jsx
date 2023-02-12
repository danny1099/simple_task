import Logo from '@/components/logo'
import Title from '@/components/title/Title'
import { Wrapper, NavbarBrand, NavbarItems } from './styles/navbar-wrapper'

export function Navbar({ showTittle = true, children }) {
  return (
    <Wrapper>
      <NavbarBrand>
        <Logo />
        {showTittle && <Title text="Simple Task" size="1.3rem" />}
      </NavbarBrand>

      <NavbarItems>{children}</NavbarItems>
    </Wrapper>
  )
}
