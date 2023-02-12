import styled from 'styled-components'

export const Container = styled.div`
  background-color: ${({ theme }) => theme.body.background};
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 1rem 4rem 0 4rem;
  width: 100%;

  /* Media querys para dispositivos mobiles */
  @media screen and (max-width: 768px) {
    height: 100vh;
    width: 100vw;
    padding: 0;
  }
`
