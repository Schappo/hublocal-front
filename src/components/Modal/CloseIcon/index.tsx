import CloseIconUI from '@mui/icons-material/Close'
import { ReactElement } from 'react'
import { CloseIconContainer } from './styles'

type CloseIconProps = {
  onClick: () => void
  color: string
}

function CloseIcon({
  onClick,
  color,
}: CloseIconProps): ReactElement<CloseIconProps> {
  return (
    <CloseIconContainer color={color} onClick={onClick}>
      <CloseIconUI fontSize="large" />
    </CloseIconContainer>
  )
}

export default CloseIcon
