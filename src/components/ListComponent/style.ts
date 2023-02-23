import { Button, TableCell } from '@mui/material'
import styled from 'styled-components'

export const CreateButton = styled(Button)`
  && {
    display: flex;
    margin: 0 0 50px 0;
    font-size: 25px;
    width: 400px;
    height: 60px;
  }
`
export const ListContainer = styled.div`
display: flex;
flex-direction: column;
flex-grow: 1;

${CreateButton} {
  align-self: end;
}
`
export const CellHeader = styled(TableCell)`
  && {
    font-size: 25px;
    padding: 20px;
  }
`

export const CellItem = styled(TableCell)`
  && {
    font-size: 18px;
    padding: 20px;
  }
`
