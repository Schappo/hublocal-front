import { Box } from '@mui/material'
import { ReactElement, useMemo, useState } from 'react'
import { useTranslation } from 'react-i18next'
import EmptyData from '../../components/EmptyData'
import Header from '../../components/Header'
import ListComponent from '../../components/ListComponent'
import MainContainer from '../../components/MainContainer'
import { Company } from '../../types/entity.type'
import CompanyModalForm from './CompanyModalForm'
import { useFetchCompanies } from './useFetchCompanies'

function CompanyView(): ReactElement {
  const [fetch, setFetch] = useState<boolean>(false)
  const { companies, loading, error, take, skip, total } =
    useFetchCompanies(fetch)
  const [openModal, setOpenModal] = useState(false)
  const [company, setCompany] = useState<Company>({} as Company)
  const [t] = useTranslation()
  const isEmptyCompanies = useMemo(() => companies.length === 0, [companies])

  const refreshData = () => {
    setFetch(!fetch)
  }
  const handleCompanyComponent = () => {
    if (loading) return

    if (isEmptyCompanies) {
      return (
        <EmptyData
          label={t('noCompaniesFound')}
          btnLabel={t('addCompany')}
          onclick={() => setOpenModal(true)}
        />
      )
    } else {
      return (
        <ListComponent
          pagination={{ take, skip, total }}
          setItem={setCompany}
          btnCreateLabel="addCompany"
          headerTable={[
            { label: 'company', width: '60%' },
            { label: 'qtdLocations', width: '20%' },
          ]}
          cellFields={['name', 'qtdLocations'] as (keyof Company)[]}
          data={companies}
          setOpenModal={setOpenModal}
        />
      )
    }
  }

  return (
    <div>
      <Header title={t('company')} />
      <MainContainer>
        <Box
          alignItems={'center'}
          justifyContent={'center'}
          minWidth={'85%'}
          margin={50}
          display={'flex'}
          borderRadius={10}
        >
          {handleCompanyComponent()}
        </Box>
      </MainContainer>

      <CompanyModalForm
        setOpenModal={setOpenModal}
        openModal={openModal}
        company={company}
        refreshData={refreshData}
      />
    </div>
  )
}

export default CompanyView
