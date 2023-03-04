import styled from 'styled-components'

export const Container = styled.div`
  background-color: ${({ theme }) => theme.body.background};
  height: 100vh;
  padding: 1rem 4rem;
  width: 100vw;

  /* Media querys para dispositivos mobiles */
  @media screen and (max-width: 768px) {
    padding: 0;
  }
`
