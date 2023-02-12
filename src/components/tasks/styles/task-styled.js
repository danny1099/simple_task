import styled from 'styled-components'

export const ItemLayout = styled.div`
  align-items: center;
  background-color: ${({ theme }) => theme.body.secondary};
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 1px 4px 0px;
  color: ${({ theme }) => theme.text.primary};
  display: flex;
  flex-direction: row;
  max-height: 60px;
  padding: 1rem;
  width: 100%;

  & label {
    background-color: ${({ theme }) => theme.body.secondary};

    & input {
      color: ${({ theme }) => theme.text.primary};
    }
  }

  & svg {
    fill: ${({ theme }) => theme.icons.primary};
  }
`

export const Item = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
  gap: 0.7rem;
  width: 100%;
`

export const Action = styled.div`
  display: grid;
  grid-auto-flow: column;
  gap: 1rem;
  align-items: center;
`
