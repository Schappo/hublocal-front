import styled from 'styled-components'
import Button from '../../../../components/Button'

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  width: 400px;
  margin: 30px 0;
`

export const LoginPageButton = styled(Button) <{ color?: string }>`
  && {
    width: 100%;
    height: 50px;
    margin: 10px 0;
    color: ${({ color }) => color};
  }
` 