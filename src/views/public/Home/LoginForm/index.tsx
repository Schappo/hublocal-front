import { useFormik } from 'formik'
import { ReactElement } from 'react'
import { useAuth } from '../../../../components/AuthUserContext'
import InputText from '../../../../components/InputText'
import { SignInLoginButton, SignInLoginContainer } from '../styles'
import { handleLoginErrors, initialValues, validationSchema } from './form'

export type LoginFormProps = {
  setFormControl: () => void
}

function LoginForm({
  setFormControl,
}: LoginFormProps): ReactElement<LoginFormProps> {
  const { signIn } = useAuth()

  const formik = useFormik({
    initialValues,
    validationSchema,
    validateOnChange: false,

    onSubmit: async (values, formik) => {
      const resp = await signIn(values)
      if (!resp.ok) {
        handleLoginErrors(resp, formik)
      } else {
        console.log('resp', resp)
        alert('Usuário logado com sucesso')
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
