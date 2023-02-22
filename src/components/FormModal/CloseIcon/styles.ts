import styled from 'styled-components'

export const CloseIconContainer = styled.div<{ color: string }>`
  position: relative;
  right: 15px;
  cursor: pointer;
  color: ${props => props.color || '#fff'};
`