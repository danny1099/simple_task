import styled from 'styled-components'
import { Dropdown } from '@nextui-org/react'

export const Menu = styled(Dropdown.Menu)`
  background-color: ${({ theme }) => theme.body.secondary};
  font-size: 0.8rem;
`

export const Button = styled(Dropdown.Button)`
  background-color: ${({ theme }) => theme.body.topbar};
  font-size: 0.8rem;

  & span {
    color: ${({ theme }) => theme.icons.primary};
  }
`

export const Trigger = styled(Dropdown.Button)`
  background-color: ${({ theme }) => theme.body.background};
  font-size: 0.8rem;
  height: 30px;
  padding: 0;
  width: auto;

  & > span.nextui-button-icon {
    display: none;
  }
`

export const Item = styled(Dropdown.Item)`
  background-color: transparent;
  font-size: 0.8rem;
`
