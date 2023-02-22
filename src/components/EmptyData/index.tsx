import { Container } from '@mui/material'
import { ReactElement } from 'react'
import { H1 } from './styles'

type EmptyDataProps = {
  label: string
}

function EmptyData(props: EmptyDataProps): ReactElement<EmptyDataProps> {
  return (
    <Container>
      <H1>{props.label}</H1>
    </Container>
  )
}

export default EmptyData
