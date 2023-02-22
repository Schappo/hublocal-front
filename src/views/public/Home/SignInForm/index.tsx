import { useFormik } from 'formik'
import { ReactElement } from 'react'
import InputText from '../../../../components/InputText'
import { signUp } from '../../../../service/auth'
import { SignInLoginButton, SignInLoginContainer } from '../styles'
import { handleSignInErrors, initialValues, validationSchema } from './form'

export type SignInFormProps = {
  setFormControl: () => void
}

function SignInForm({
  setFormControl,
}: SignInFormProps): ReactElement<SignInFormProps> {
  const formik = useFormik({
    initialValues,
    validationSchema,
    validateOnChange: false,

    onSubmit: async (values, formik) => {
      // extract repeatPassword from values
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { repeatPassword, ...user } = values
      const resp = await signUp(user)
      if (!resp.ok) {
        handleSignInErrors(resp, formik)
      }
    },
  })
  return (
    <SignInLoginContainer>
      <form onSubmit={formik.handleSubmit}>
        <InputText type="text" fieldName="name" formik={formik} />

        <InputText type="text" fieldName="email" formik={formik} />

        <InputText type="password" fieldName="password" formik={formik} />
        <InputText type="password" fieldName="repeatPassword" formik={formik} />

        <SignInLoginButton variant="contained" type="submit">
          Registrar
        </SignInLoginButton>

        <SignInLoginButton
          color="success"
          variant="contained"
          type="button"
          onClick={setFormControl}
        >
          Logar
        </SignInLoginButton>
      </form>
    </SignInLoginContainer>
  )
}

export default SignInForm
