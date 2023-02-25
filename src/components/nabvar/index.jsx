import { Logo } from '@/components/logo'
import { Title } from '@/components/title/Title'
import { NavLink } from '@/components/navlink'
import { Separator } from '@/components/separator'
import { ToggleTheme } from '@/components/toggle'
import { Wrapper, NavbarBrand, NavbarItems } from './styles/navbar-wrapper'

export function Navbar({ showTittle = true, routes = [] }) {
  return (
    <Wrapper>
      <NavbarBrand>
        <Logo />
        {showTittle && <Title text="Simple Task" size="1.3rem" />}
      </NavbarBrand>

      <NavbarItems>
        {routes.map(({ id, href, text, variant }) => {
          return <NavLink key={id} to={href} text={text} variant={variant} />
        })}

        <Separator />
        <ToggleTheme />
      </NavbarItems>
    </Wrapper>
  )
}
