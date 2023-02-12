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
