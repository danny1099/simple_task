import styled from 'styled-components'

export const Content = styled.div`
  align-items: center;
  background-color: ${({ theme }) => theme.body.background};
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 2rem;
  width: 100%;

  /* Media querys para dispositivos mobiles */
  @media screen and (max-width: 768px) {
    padding: 0;
  }
`

export const Header = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  width: 70%;

  div.header-title {
    padding: 0.5rem 1.5rem;
    width: 100%;

    & h5 {
      margin: 0 0.2rem;
      font-size: smaller;
    }
  }

  /* Media querys para dispositivos mobiles */
  @media screen and (max-width: 768px) {
    padding: 2rem 0 0 0;
    width: 100%;

    div.header-title {
      & h5 {
        display: none;
      }
    }
  }
`
