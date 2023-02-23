import DeleteIcon from '@mui/icons-material/Delete'
import EditIcon from '@mui/icons-material/Edit'
import LocationCityIcon from '@mui/icons-material/LocationCity'
import { ReactElement } from 'react'
import { CellActionsContainer } from './styles'

type CellActionsProps = {
  editAction?: () => void
  deleteAction?: () => void
  addLocationAction?: () => void
}

function CellActions({
  editAction,
  deleteAction,
  addLocationAction,
}: CellActionsProps): ReactElement<CellActionsProps> {
  return (
    <CellActionsContainer>
      <EditIcon onClick={editAction} fontSize="large" />
      <LocationCityIcon
        onClick={addLocationAction}
        color="primary"
        fontSize="large"
      />
      <DeleteIcon onClick={deleteAction} color="error" fontSize="large" />
    </CellActionsContainer>
  )
}

export default CellActions
