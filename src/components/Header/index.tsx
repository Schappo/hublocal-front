import BusinessIcon from '@mui/icons-material/Business'
import { ReactElement } from 'react'
import { HeaderContainer, HeaderH1 } from './styles'

type HeaderProps = {
  title: string
}

function Header(props: HeaderProps): ReactElement<HeaderProps> {
  return (
    <HeaderContainer>
      <BusinessIcon sx={{ fontSize: 30 }} />
      <HeaderH1>{props.title}</HeaderH1>
    </HeaderContainer>
  )
}

export default Header
