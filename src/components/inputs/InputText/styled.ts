import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 12px 0;

`

export const Label = styled.label<{ hasError: boolean }>`
  color: ${({ hasError }) => (hasError ? '#d32f2f' : 'black')};
  margin-bottom: 10px;
`