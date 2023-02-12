import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const LinkStyled = styled(Link)`
  align-items: center;
  background: ${({ theme, variant }) => theme.navlink[variant].background};
  border-radius: 20px;
  color: ${({ theme, variant }) => theme.navlink[variant].color};
  display: flex;
  flex-direction: column;
  font-size: small;
  font-weight: 400;
  justify-content: center;
  margin-right: 3px;
  padding: 0.5rem 1.5rem;
  text-decoration: none;
`
