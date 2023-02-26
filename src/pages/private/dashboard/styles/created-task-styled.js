import styled from 'styled-components'

export const Wrapper = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
  height: 60px;
  justify-content: space-between;
  padding: 0.4rem 1.5rem;
  width: 100%;

  form {
    align-items: center;
    display: flex;
    flex-direction: row;
    gap: 0.5rem;
    height: 50px;
    width: 80%;

    & div,
    label {
      background-color: ${({ theme }) => theme.inputs.background};
    }
  }

  /* Media querys para dispositivos mobiles */
  @media screen and (max-width: 768px) {
    padding: 0.4rem 1rem;
    width: 100%;
  }
`
