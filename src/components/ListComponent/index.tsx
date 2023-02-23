import {
  Paper,
  Table,
  TableBody,
  TableContainer,
  TableFooter,
  TableHead,
  TablePagination,
  TableRow,
} from '@mui/material'
import { ReactElement, useState } from 'react'
import { useTranslation } from 'react-i18next'
import CellActions from './CellActions'
import { CellHeader, CellItem, CreateButton, ListContainer } from './style'

type ListComponentProps<T> = {
  data: T[]
  setItem: (item: T) => void
  setOpenModal: (openModal: boolean) => void
  btnCreateLabel: string
  headerTable: { label: string; width: string }[]
  cellFields: (keyof T)[]
  pagination: { skip?: number; take?: number; total?: number }
}

function ListComponent<T>({
  data,
  setItem,
  setOpenModal,
  btnCreateLabel,
  headerTable,
  cellFields,
  pagination,
}: ListComponentProps<T>): ReactElement<ListComponentProps<T>> {
  const [t] = useTranslation()
  const [page, setPage] = useState(0)
  const [rowsPerPage, setRowsPerPage] = useState(pagination.take)

  // Avoid a layout jump when reaching the last page with empty rows.
  // const emptyRows =
  //   page > 0 ? Math.max(0, (1 + page) * rowsPerPage - pagination.total) : 0

  const handleChangePage = (
    event: React.MouseEvent<HTMLButtonElement> | null,
    newPage: number,
  ) => {
    setPage(newPage)
  }

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10))
    setPage(0)
  }

  const openCreateModal = () => {
    setItem({} as T)
    setOpenModal(true)
  }

  const editAction = (item: T) => {
    setItem(item)
    setOpenModal(true)
  }

  return (
    <>
      <ListContainer>
        <CreateButton
          onClick={openCreateModal}
          variant="contained"
          type="button"
        >
          {t(btnCreateLabel)}
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
                  height: '80px',
                }}
              >
                {headerTable.map((item, index) => (
                  <CellHeader key={index} width={item.width}>
                    {t(item.label)}
                  </CellHeader>
                ))}
                <CellHeader align="left">{t('actions')}</CellHeader>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.map((item, index) => (
                <TableRow
                  key={index}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  {cellFields.map((field, index) => (
                    <CellItem key={index} component="th" scope="row">
                      {item[field] as string}
                    </CellItem>
                  ))}
                  <CellActions editAction={() => editAction(item)} />
                </TableRow>
              ))}
            </TableBody>
            <TableFooter>
              <TableRow>
                <TablePagination
                  rowsPerPageOptions={[5, 10, 25]}
                  colSpan={3}
                  count={pagination.total || 0}
                  rowsPerPage={rowsPerPage || 10}
                  page={page}
                  SelectProps={{
                    inputProps: {
                      'aria-label': 'rows per page',
                    },
                    native: true,
                  }}
                  onPageChange={handleChangePage}
                  onRowsPerPageChange={handleChangeRowsPerPage}
                />
              </TableRow>
            </TableFooter>
          </Table>
        </TableContainer>
      </ListContainer>
    </>
  )
}

export default ListComponent
