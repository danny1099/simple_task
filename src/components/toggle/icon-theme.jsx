import { BsSun } from 'react-icons/bs'
import { RiMoonFoggyLine } from 'react-icons/ri'
import styled from 'styled-components'

export const IconTheme = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;

  & svg {
    fill: ${({ theme }) => theme.icons.theme};
  }
`

export const Icon = ({ theme, ...props }) => {
  if (theme === 'light') {
    return <RiMoonFoggyLine {...props} />
  }

  return <BsSun {...props} />
}
