import { useFormik } from 'formik'
import { ReactElement } from 'react'
import InputText from '../../../../components/InputText'
import { signIn } from '../../../../service/auth'
import { SignInLoginButton, SignInLoginContainer } from '../styles'
import { initialValues, validationSchema } from './form'

export type LoginFormProps = {
  setFormControl: () => void
}

function LoginForm({
  setFormControl,
}: LoginFormProps): ReactElement<LoginFormProps> {
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
    <SignInLoginContainer>
      <form onSubmit={formik.handleSubmit}>
        <InputText type="text" fieldName="email" formik={formik} />

        <InputText type="password" fieldName="password" formik={formik} />
        <SignInLoginButton variant="contained" type="submit">
          Logar
        </SignInLoginButton>

        <SignInLoginButton
          color="success"
          variant="contained"
          type="button"
          onClick={setFormControl}
        >
          Criar Conta
        </SignInLoginButton>
      </form>
    </SignInLoginContainer>
  )
}

export default LoginForm
