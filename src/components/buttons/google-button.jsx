import styled from 'styled-components'
import { FcGoogle } from 'react-icons/fc'

const StyledButton = styled.button`
  align-items: center;
  background-color: ${({ theme }) => theme.buttons.google.background};
  border-radius: 5px;
  border: 1px solid ${({ theme }) => theme.buttons.google.border};
  color: ${({ theme }) => theme.buttons.google.color};
  cursor: pointer;
  display: flex;
  flex-direction: row;
  font-size: small;
  justify-content: center;
  margin: ${(props) => props.margin || '0'};
  padding: 0.5rem 1rem;
  width: ${(props) => props.width || '100%'};

  & svg {
    margin: 0 0.5rem;
  }
`

export function GoogleButton({ children, ...props }) {
  return (
    <StyledButton {...props}>
      <FcGoogle size={20} />
      {children}
    </StyledButton>
  )
}
