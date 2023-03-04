import { LinkStyled } from './styles/link-styled'

export function NavLink({ href, text, ...props }) {
  return (
    <LinkStyled to={href} {...props} replace>
      {text}
    </LinkStyled>
  )
}
