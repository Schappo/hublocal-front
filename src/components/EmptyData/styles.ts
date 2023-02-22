import styled from 'styled-components'
import Button from '../Button'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 1024px;
  text-align: center;
`

export const H1 = styled.h1`
  font-size: 80px;
`

export const EmptyDataButton = styled(Button)`
  && {
    margin: 50px 0;
    font-size: 30px;
    width: 600px;
    height: 80px;
  }
`