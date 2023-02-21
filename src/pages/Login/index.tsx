import { ReactElement } from 'react'
import BannerImg from '../../assets/img/banner-login-sign-in.png'
import LogoImg from '../../assets/img/logo.png'
import LoginForm from './LoginForm'
import {
  BannerBottom,
  BannerBottomH1,
  BannerBottomH6,
  BannerTop,
  Container,
  HublocalLogo,
  LoginContainer,
} from './styled'

function Login(): ReactElement {
  return (
    <LoginContainer>
      <Container bgColor="#0485FF">
        <BannerTop src={BannerImg} />
        <BannerBottom>
          <BannerBottomH1>
            Junte-se a vários clientes satisifeitos
          </BannerBottomH1>
          <BannerBottomH6>
            Cliente HubLocal ganha mais relevância, autoridade e visibilidade.
            Mais de 7.000 marcas confiam na nossa plataforma. Seja uma delas!
          </BannerBottomH6>
        </BannerBottom>
      </Container>
      <Container>
        <HublocalLogo src={LogoImg} />
        <LoginForm />
      </Container>
    </LoginContainer>
  )
}

export default Login
