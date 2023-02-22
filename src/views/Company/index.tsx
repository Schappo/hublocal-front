import { Container } from '@mui/material'
import { ReactElement } from 'react'
import Header from '../../components/Header'

function Company(): ReactElement {
  return (
    <Container style={{ border: '1px solid red' }}>
      <Header title="Company" />
    </Container>
  )
}

export default Company
