import { useFormik } from 'formik'
import { ReactElement } from 'react'
import InputText from '../../../../components/InputText'
import { signIn } from '../../../../service/auth'
import { initialValues, validationSchema } from './form'
import { Container, LoginPageButton } from './styled'

function LoginForm(): ReactElement {
  const formik = useFormik({
    initialValues,
    validationSchema,
    validateOnChange: false,

    onSubmit: async (values, formik) => {
      const resp = await signIn(values)
      if (!resp.ok) {
        if ([401, 403].includes(resp.status || 0)) {
          formik.setFieldError('password', 'invalid_email_or_password')
          formik.setFieldError('email', 'invalid_email_or_password')
        }
      }
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
