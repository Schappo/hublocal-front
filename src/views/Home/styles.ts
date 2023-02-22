import styled from 'styled-components'
import Button from '../../components/Button'

export const FormsContainer = styled.div<{ bgColor?: string }>`
  height: 100vh;
  width: 50%;
  background: ${props => props.bgColor};
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

export const SignInLoginContainer = styled.div`
  display: flex;
  flex-direction: column;

  width: 400px;
  margin: 30px 0;
`


export const HublocalLogo = styled.img`
  width: 306px;
  height: 107px;
  left: 808px;
  top: 173px;
`
export const HomeContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: row;
`


export const SignInLoginButton = styled(Button) <{ color?: string }>`
  && {
    width: 100%;
    height: 50px;
    margin: 10px 0;
    color: ${({ color }) => color};
  }
` 