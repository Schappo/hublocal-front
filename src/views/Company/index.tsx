import { Box } from '@mui/material'
import { ReactElement } from 'react'
import EmptyData from '../../components/EmptyData'
import Header from '../../components/Header'
import MainContainer from '../../components/MainContainer'
import { useFetchCompanies } from './useFetchCompanies'

function Company(): ReactElement {
  const { companies, loading, error } = useFetchCompanies()

  const isEmptyCompanies = companies.length === 0

  const handleEmptyCompanies = () => {
    if (isEmptyCompanies)
      return (
        <EmptyData
          label="Nenhuma empresa cadastrada!"
          btnLabel="Adicionar Empresa"
          onclick={() => console.log('Adicionar Empresa')}
        />
      )
  }

  return (
    <div>
      <Header title="Company" />
      <MainContainer title="test">
        <Box
          alignItems={'center'}
          justifyContent={'center'}
          flexDirection={'column'}
        >
          {isEmptyCompanies && handleEmptyCompanies()}
        </Box>
      </MainContainer>
    </div>
  )
}

export default Company
