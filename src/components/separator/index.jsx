import styled from 'styled-components'

export const SeparatorVR = styled.span`
  border-left: 1px solid ${({ theme }) => theme.separator.color};
  height: ${(props) => props.height || '25px'};
  width: ${(props) => props.width || '1px'};
  margin: 1px 3px 0 3px;
`

export const SeparatorHR = styled.span`
  border-bottom: 1px solid ${({ theme }) => theme.separator.color};
  height: ${(props) => props.height || '1px'};
  width: ${(props) => props.width || '100px'};
  margin: 1px 3px 0 3px;
`

export function Separator({ props }) {
  return <SeparatorVR {...props} />
}
