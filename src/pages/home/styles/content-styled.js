import styled from 'styled-components'

export const Content = styled.div`
  display: flex;
  flex-direction: row;
  height: calc(100% - 30px);
  width: 100%;

  /* Media querys para dispositivos mobiles */
  @media screen and (max-width: 768px) {
    flex-direction: column-reverse;
    justify-content: flex-end;
  }
`

export const ContentIntro = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: auto;
  width: 40%;

  /* Media querys para dispositivos mobiles */
  @media screen and (max-width: 768px) {
    height: 40%;
    width: 100%;
    padding: 1rem;

    & h2 {
      font-size: 2.3rem;
    }

    & button {
      width: 100%;
    }
  }
`

export const ContentView = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  height: auto;
  width: 60%;

  & img {
    height: 520px;
    width: 520px;
    object-fit: contain;
  }

  /* Media querys para dispositivos mobiles */
  @media screen and (max-width: 768px) {
    padding: 1rem;
    height: 45%;
    width: 100%;

    & img {
      height: 320px;
      width: 320px;
      object-fit: contain;
    }
  }
`
