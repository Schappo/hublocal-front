import BusinessIcon from '@mui/icons-material/Business'
import { ReactElement } from 'react'
import { useNavigate } from 'react-router-dom'
import { HeaderContainer, HeaderH1 } from './styles'

type HeaderProps = {
  title: string
}

function Header(props: HeaderProps): ReactElement<HeaderProps> {
  const navigate = useNavigate()
  return (
    <HeaderContainer>
      <BusinessIcon
        sx={{ fontSize: 30, cursor: 'pointer' }}
        onClick={() => navigate('/company')}
      />
      <HeaderH1>{props.title}</HeaderH1>
    </HeaderContainer>
  )
}

export default Header
