import styled from 'styled-components'

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: calc(100% - 60px);
  width: 100%;

  /* Media querys para dispositivos mobiles */
  @media screen and (max-width: 768px) {
    height: calc(100% - 70px);
  }
`
