import styled from 'styled-components'

export const ItemLayout = styled.div`
  align-items: center;
  background-color: ${({ theme }) => theme.tasks.background};
  border-radius: 10px;
  box-shadow: ${({ theme }) => theme.tasks.shadow};
  display: flex;
  flex-direction: row;
  max-height: 60px;
  padding: 1rem;
  width: 100%;
`

export const Item = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
  height: 30px;
  gap: 0.7rem;
  width: 90%;

  & span {
    font-size: 0.8rem;
    color: ${({ theme }) => theme.tasks.color};
  }
`

export const Action = styled.div`
  align-items: center;
  display: grid;
  gap: 0.7rem;
  grid-auto-flow: column;
  height: 30px;
  width: auto;
`
