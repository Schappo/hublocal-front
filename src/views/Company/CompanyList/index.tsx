import {
  Paper,
  Table,
  TableBody,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material'
import { ReactElement } from 'react'
import { useTranslation } from 'react-i18next'
import { Company } from '../../../types/entity.type'
import CellActions from '../CellActions'
import {
  CellHeader,
  CellItem,
  CompanyListContainer,
  CreateButton,
} from './styles'

type CompanyListProps = {
  data: Company[]
  setOpenModal: (openModal: boolean) => void
  setCompany: (company: Company) => void
}

function CompanyList({
  data,
  setOpenModal,
  setCompany,
}: CompanyListProps): ReactElement<CompanyListProps> {
  const [t] = useTranslation()

  const editAction = (item: Company) => {
    setCompany(item)
    setOpenModal(true)
  }

  const openCreateModal = () => {
    setCompany({} as Company)
    setOpenModal(true)
  }

  return (
    <CompanyListContainer>
      <CreateButton onClick={openCreateModal} variant="contained" type="button">
        {t('addCompany')}
      </CreateButton>
      <TableContainer
        style={{ display: 'flex', flexGrow: 1 }}
        component={Paper}
      >
        <Table sx={{ width: '100%' }}>
          <TableHead>
            <TableRow
              style={{
                margin: '24px',
                height: '100px',
              }}
            >
              <CellHeader width={'60%'}>{t('company')}</CellHeader>
              <CellHeader width={'20%'} align="left">
                {t('qtdLocations')}
              </CellHeader>
              <CellHeader align="left">{t('actions')}</CellHeader>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((item, index) => (
              <TableRow
                key={index}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <CellItem component="th" scope="row">
                  {item.name}
                </CellItem>
                <CellItem align="left">{10}</CellItem>
                <CellActions editAction={() => editAction(item)} />
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </CompanyListContainer>
  )
}

export default CompanyList
