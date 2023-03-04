import styled from 'styled-components'

export const Content = styled.div`
  display: flex;
  flex-direction: row;
  height: calc(100% - 60px);
  width: 100%;

  /* Media querys para dispositivos mobiles */
  @media screen and (max-width: 768px) {
    flex-direction: column-reverse;
    height: calc(100% - 70px);
    justify-content: flex-end;
  }
`

export const ContentIntro = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  width: 40%;
  padding: 1rem;

  /* Media querys para dispositivos mobiles */
  @media screen and (max-width: 768px) {
    height: 40%;
    width: 100%;
    padding: 1.5rem;

    & h2 {
      font-size: 3rem;
    }

    & button {
      width: 100%;
    }
  }
`

export const ContentView = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
  height: 100%;
  justify-content: flex-end;
  width: 60%;

  & img {
    height: 520px;
    width: 520px;
    object-fit: contain;
  }

  /* Media querys para dispositivos mobiles */
  @media screen and (max-width: 768px) {
    height: 45%;
    justify-content: center;
    padding: 1rem;
    width: 100%;

    & img {
      height: 350px;
      width: 350px;
      object-fit: contain;
    }
  }
`
