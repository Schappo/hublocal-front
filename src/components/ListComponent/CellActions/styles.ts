import { TableCell } from '@mui/material'
import styled from 'styled-components'

export const CellActionsContainer = styled(TableCell)`
  && {
    > * {
      margin: 0 10px;
      cursor: pointer;
    }
  }
`