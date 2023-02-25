import styled from 'styled-components'

export const TitleStyled = styled.h1`
  color: ${({ theme }) => theme.titles.primary};
  display: inline-block;
  font-family: ${({ theme }) => theme.titles.font};
  font-size: ${(props) => props.size || '1rem'};
  font-weight: 300;
  margin-top: 2px;
  line-height: 1;
`

export function Title({ text, ...props }) {
  return <TitleStyled {...props}>{text}</TitleStyled>
}
