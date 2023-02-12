import styled from 'styled-components'

export const Wrapper = styled.footer`
  align-items: center;
  background-color: ${({ theme }) => theme.body.background};
  color: ${({ theme }) => theme.text.primary};
  display: flex;
  flex-direction: row;
  font-size: x-small;
  height: 30px;
  padding: 0rem 4rem;

  & > a {
    align-items: center;
    color: ${({ theme }) => theme.text.primary};
    display: inline-flex;
    font-weight: 300;
    text-decoration: none;
    cursor: pointer;

    & > svg {
      color: ${({ theme }) => theme.icons.primary};
      margin-right: 5px;
      margin-top: -2px;
    }
  }

  /* Media querys para dispositivos mobiles */
  @media screen and (max-width: 768px) {
    padding: 0.5rem 1rem;
  }
`
