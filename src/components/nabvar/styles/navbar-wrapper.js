import styled from 'styled-components'

export const Wrapper = styled.div`
  align-items: center;
  background-color: ${({ theme }) => theme.body.topbar};
  border-radius: 30px;
  display: flex;
  flex-direction: row;
  height: 60px;
  justify-content: space-between;
  padding: 0.2rem 2rem;
  position: sticky;
  width: 100%;

  & a {
    text-decoration: none;
  }

  /* Media querys para dispositivos mobiles */
  @media screen and (max-width: 768px) {
    border-radius: 0;
    height: 70px;
    padding: 0.5rem 1rem;
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
  gap: 0.3rem;

  /* Media querys para dispositivos mobiles */
  @media screen and (max-width: 768px) {
    gap: 0.2rem;
  }
`
