import styled from 'styled-components'

export const Wrapper = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 1rem 1.5rem;
  width: 70%;

  /* Media querys para dispositivos mobiles */
  @media screen and (max-width: 768px) {
    padding: 2rem 1rem 0 1rem;
    width: 100%;
  }
`
