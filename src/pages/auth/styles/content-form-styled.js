import styled from 'styled-components'

export const Wrapper = styled.div`
  align-items: center;
  background-color: ${({ theme }) => theme.body.background};
  display: flex;
  flex-direction: column;
  height: 75%;
  padding: 4rem 4rem 0 4rem;
  width: 550px;

  & form {
    align-items: center;
    display: grid;
    gap: 1.8rem;
    grid-auto-flow: row;
    margin-top: 1.5rem;
    width: 100%;

    & label {
      color: ${({ theme }) => theme.text.primary};
      font-size: small;
      margin: 0;
    }
  }

  /* Media querys para dispositivos mobiles */
  @media screen and (max-width: 768px) {
    padding: 3rem 1.5rem 0 1.5rem;
    width: 100%;
  }
`
