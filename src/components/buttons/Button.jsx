import styled from 'styled-components'

export const Button = styled.button`
  align-items: center;
  background: ${({ theme, variant }) => theme.buttons[variant].background};
  border-radius: ${(props) => props.br || '30px'};
  border: none;
  color: ${({ theme, variant }) => theme.buttons[variant].color};
  cursor: pointer;
  display: flex;
  flex-direction: row;
  font-size: ${(props) => props.size || '1rem'};
  font-weight: 400;
  height: ${(props) => props.height || '50px'};
  margin: ${(props) => props.margin || '0'};
  justify-content: center;
  padding: 0.9rem 0;
  text-decoration: none;
  width: ${(props) => props.width || '150px'};

  & > svg {
    margin-right: 10px;
  }
`
