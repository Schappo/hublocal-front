import { ReactElement } from 'react'
import LogoImg from '../../../assets/img/logo.png'
import BannerHome from '../../../components/BannerHome'
import LoginForm from './LoginForm'
import { Container, HublocalLogo, LoginContainer } from './styled'

function Login(): ReactElement {
  return (
    <LoginContainer>
      <BannerHome />
      <Container>
        <HublocalLogo src={LogoImg} />
        <LoginForm />
      </Container>
    </LoginContainer>
  )
}

export default Login
