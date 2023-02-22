import { Box } from '@mui/material'
import { ReactElement, useState } from 'react'
import { useTranslation } from 'react-i18next'
import EmptyData from '../../components/EmptyData'
import FormModal from '../../components/FormModal'
import Header from '../../components/Header'
import MainContainer from '../../components/MainContainer'
import { Company } from '../../types/entity.type'
import CompanyForm from './CompanyForm'
import { useFetchCompanies } from './useFetchCompanies'

function CompanyView(): ReactElement {
  const { companies, loading, error } = useFetchCompanies()
  const [openModal, setOpenModal] = useState(false)
  const [company, setCompany] = useState<Company>({} as Company)
  const [onSubmitForm, setOnSubmitForm] = useState(false)
  const [t] = useTranslation()
  const isEmptyCompanies = companies.length === 0

  const handleEmptyCompanies = () => {
    if (isEmptyCompanies)
      return (
        <EmptyData
          label={t('noCompaniesFound')}
          btnLabel={t('addCompany')}
          onclick={() => setOpenModal(true)}
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
          <FormModal
            openModal={openModal}
            setOpenModal={setOpenModal}
            title="addCompany"
            btnLabel="addCompany"
            setOnSubmitForm={() => setOnSubmitForm(!onSubmitForm)}
          >
            <CompanyForm company={company} onSubmitForm={onSubmitForm} />
          </FormModal>
          {isEmptyCompanies && handleEmptyCompanies()}
        </Box>
      </MainContainer>
    </div>
  )
}

export default CompanyView
