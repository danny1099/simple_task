import styled from 'styled-components'
import { Input } from '@nextui-org/react'

export const TextInputStyled = styled(Input)`
  & div {
    background-color: ${({ theme }) => theme.inputs.background};
  }
`

export function TextInput({ text, ...props }) {
  return <TextInputStyled {...props} animated={false} className="input-text" />
}
