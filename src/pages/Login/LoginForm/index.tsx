import { useFormik } from 'formik'
import { ReactElement } from 'react'
import InputText from '../../../components/InputText'
import { validationSchema } from './form'
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
    },
  })

  return (
    <Container>
      <form onSubmit={formik.handleSubmit}>
        <InputText type="text" fieldName="email" formik={formik} />

        <InputText type="password" fieldName="password" formik={formik} />
        <LoginPageButton variant="contained" type="submit">
          Logar
        </LoginPageButton>

        <LoginPageButton
          color="success"
          variant="contained"
          type="button"
          onClick={() => console.log('test')}
        >
          Criar Conta
        </LoginPageButton>
      </form>
    </Container>
  )
}

export default LoginForm
