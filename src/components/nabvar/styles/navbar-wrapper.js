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

export const NavbarBrand = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  & > h1 {
    font-size: 1.2rem;
  }

  /* Media querys para dispositivos mobiles */
  @media screen and (max-width: 768px) {
    & > h1 {
      display: none;
    }
  }
`

export const NavbarItems = styled.nav`
  display: grid;
  grid-auto-flow: column;
  height: 100%;
  align-items: center;
  gap: 0.4rem;

  /* Media querys para dispositivos mobiles */
  @media screen and (max-width: 768px) {
    gap: 0.2rem;
  }
`
