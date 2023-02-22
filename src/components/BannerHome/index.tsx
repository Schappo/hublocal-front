import { ReactElement } from 'react'
import BannerImg from '../../assets/img/banner-login-sign-in.png'
import {
  BannerBottom,
  BannerBottomH1,
  BannerBottomH6,
  BannerTop,
  Container,
} from './styles'

function BannerHome(): ReactElement {
  return (
    <Container bgColor="#0485FF">
      <BannerTop src={BannerImg} />
      <BannerBottom>
        <BannerBottomH1>Junte-se a vários clientes satisifeitos</BannerBottomH1>
        <BannerBottomH6>
          Cliente HubLocal ganha mais relevância, autoridade e visibilidade.
          Mais de 7.000 marcas confiam na nossa plataforma. Seja uma delas!
        </BannerBottomH6>
      </BannerBottom>
    </Container>
  )
}

export default BannerHome
