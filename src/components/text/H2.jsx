import styled from 'styled-components'

export const H2Styled = styled.h2`
  color: ${({ theme }) => theme.titles.primary};
  font-family: ${({ theme }) => theme.titles.font};
  font-size: ${(props) => props.size || '1.7rem'};
  font-weight: 400;
  line-height: 1;
  margin: ${(props) => props.margin || '0'};
`

export function H2({ text, ...props }) {
  return <H2Styled {...props}>{text}</H2Styled>
}
