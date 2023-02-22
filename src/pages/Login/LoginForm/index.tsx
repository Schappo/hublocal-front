import { useFormik } from 'formik'
import { ReactElement } from 'react'
import InputText from '../../../components/InputText'
import { handlerLoginError, validationSchema } from './form'
import { Container, LoginPageButton } from './styled'

function LoginForm(): ReactElement {
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema,
    validateOnChange: false,
    onSubmit: (values, formik) => {
      alert(JSON.stringify(values, null, 2))
      handlerLoginError(formik)
    },
  })

  return (
    <Container>
      <form onSubmit={formik.handleSubmit}>
        <InputText type="text" fieldName="email" formik={formik} />

        <InputText type="password" fieldName="Password" formik={formik} />
        <LoginPageButton variant="contained" type="submit">
          Login
        </LoginPageButton>

        <LoginPageButton color="success" variant="contained" type="submit">
          Login
        </LoginPageButton>
      </form>
    </Container>
  )
}

export default LoginForm
