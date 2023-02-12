import styled from 'styled-components'

export const TitleStyled = styled.h2`
  background-clip: inherit;
  background: ${({ theme }) => theme.titles.grandient};
  display: inline-block;
  font-family: ${({ theme }) => theme.titles.font};
  font-size: ${(props) => props.size || '4rem'};
  font-weight: 500;
  line-height: 1;
  margin: 0;
  -webkit-text-fill-color: transparent;
  -webkit-background-clip: text;

  /* Media querys para dispositivos mobiles */
  @media screen and (max-width: 768px) {
    font-size: 1.8rem;
  }
`

export function TitleGradient({ text, ...props }) {
  return <TitleStyled {...props}>{text}</TitleStyled>
}
