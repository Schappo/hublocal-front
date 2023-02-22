import { ReactElement } from 'react'
import { HeaderContainer } from './styles'

type HeaderProps = {
  title: string
}

function Header(props: HeaderProps): ReactElement<HeaderProps> {
  return (
    <HeaderContainer>
      <h1>{props.title}</h1>
    </HeaderContainer>
  )
}

export default Header
