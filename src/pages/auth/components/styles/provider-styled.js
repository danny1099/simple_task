import styled from 'styled-components'

export const Wrapper = styled.div`
  align-items: center;
  background-color: ${({ theme }) => theme.body.background};
  display: flex;
  flex-direction: column;
  height: 25%;
  justify-content: flex-start;
  padding: 1rem 4rem;
  width: 550px;

  & span {
    font-size: 0.7rem;
    color: ${({ theme }) => theme.text.primary};
  }

  & p {
    color: gray;
    font-size: xx-small;
    text-align: center;
  }

  /* Media querys para dispositivos mobiles */
  @media screen and (max-width: 768px) {
    padding: 1.5rem 2rem;
    width: 100%;
    height: 40%;
  }
`
