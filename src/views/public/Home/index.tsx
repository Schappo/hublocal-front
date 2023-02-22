import { ReactElement, useEffect, useState } from 'react'
import LogoImg from '../../../assets/img/logo.png'
import BannerHome from '../../../components/BannerHome'
import LoginForm from './LoginForm'
import SignInForm from './SignInForm'
import { FormsContainer, HomeContainer, HublocalLogo } from './styles'

const enum FormControlEnum {
  LOGIN = 'login',
  SIGN_IN = 'sign-in',
}

function Login(): ReactElement {
  const [formControl, setFormControl] = useState<FormControlEnum>(
    FormControlEnum.LOGIN,
  )

  const handleFormChange = () => {
    if (formControl === FormControlEnum.SIGN_IN) {
      return (
        <SignInForm
          setFormControl={() => setFormControl(FormControlEnum.LOGIN)}
        />
      )
    } else {
      return (
        <LoginForm
          setFormControl={() => setFormControl(FormControlEnum.SIGN_IN)}
        />
      )
    }
  }

  useEffect(() => {
    handleFormChange()
  }, [formControl])

  return (
    <HomeContainer>
      <BannerHome />
      <FormsContainer>
        <HublocalLogo src={LogoImg} />
        {handleFormChange()}
      </FormsContainer>
    </HomeContainer>
  )
}

export default Login
