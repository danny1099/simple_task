import styled from 'styled-components'

export const Wrapper = styled.div`
  align-items: center;
  background-color: ${({ theme }) => theme.body.topbar};
  border-radius: 30px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  left: 0;
  padding: 0.2rem 2rem;
  position: sticky;
  top: 0;
  height: 60px;
  width: 100%;

  /* Media querys para dispositivos mobiles */
  @media screen and (max-width: 768px) {
    border-radius: 0;
    padding: 0.5rem 1rem;
    height: 70px;
  }
`

export const TopbarBrand = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  /* Media querys para dispositivos mobiles */
  @media screen and (max-width: 768px) {
    & h1 {
      display: none;
    }
  }
`

export const TopbarItems = styled.nav`
  display: grid;
  grid-auto-flow: column;
  height: 100%;
  align-items: center;
  gap: 0.7rem;

  & svg.log-out {
    fill: ${({ theme }) => theme.icons.primary};
  }

  /* Media querys para dispositivos mobiles */
  @media screen and (max-width: 768px) {
    gap: 1rem;
  }
`
