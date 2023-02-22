import { Box } from '@mui/material'
import { ReactElement } from 'react'
import Header from '../../components/Header'
import MainContainer from '../../components/MainContainer'
import { useFetchCompanies } from './useFetchCompanies'

function Company(): ReactElement {
  const { companies, loading, error } = useFetchCompanies()

  const isEmptyCompanies = companies.length === 0

  const handleEmptyCompanies = () => {
    if (isEmptyCompanies) return <div>Empty</div>
  }

  return (
    <div>
      <Header title="Company" />
      <MainContainer title="test">
        <Box>{isEmptyCompanies && handleEmptyCompanies()}</Box>
      </MainContainer>
    </div>
  )
}

export default Company
