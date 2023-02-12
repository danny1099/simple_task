import styled from 'styled-components'

export const Container = styled.div`
  background-color: ${({ theme }) => theme.body.background};
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100vw;

  /* Media querys para dispositivos mobiles */
  @media screen and (max-width: 768px) {
    height: 100%;
    width: 100%;
  }
`
