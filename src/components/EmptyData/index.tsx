import { ReactElement } from 'react'
import { Container, EmptyDataButton, H1 } from './styles'

type EmptyDataProps = {
  label: string
  btnLabel: string
  onclick: () => void
}

function EmptyData({
  label,
  btnLabel,
  onclick,
}: EmptyDataProps): ReactElement<EmptyDataProps> {
  return (
    <Container>
      <H1>{label}</H1>
      <EmptyDataButton type="button" onClick={onclick} variant="contained">
        {btnLabel}
      </EmptyDataButton>
    </Container>
  )
}

export default EmptyData
