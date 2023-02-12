import styled from 'styled-components'

export const P = styled.p`
  color: ${({ theme }) => theme.text.primary};
  font-family: ${({ theme }) => theme.text.family};
  font-size: small;
  margin: ${(props) => props.margin || '0'};
`
