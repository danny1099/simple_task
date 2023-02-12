import styled from 'styled-components'

export const Wrapper = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 40px;
  justify-content: center;
  object-fit: contain;
  width: 40px;

  & svg {
    color: ${({ theme }) => theme.icons.primary};
    height: 30px;
    width: 30px;
  }
`
