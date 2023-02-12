import styled from 'styled-components'
import { Input } from '@nextui-org/react'

export const TextInputStyled = styled(Input.Password)`
  & div {
    background-color: ${({ theme }) => theme.inputs.background};

    & > span {
      color: #7a7a7a;
    }
  }
`

export function InputPassword({ text, ...props }) {
  return (
    <TextInputStyled {...props} clearable animated={false} type="password" />
  )
}
