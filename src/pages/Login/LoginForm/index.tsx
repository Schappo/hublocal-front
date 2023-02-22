import { useFormik } from 'formik'
import { ReactElement } from 'react'
import InputText from '../../../components/inputs/InputText'
import { handlerLoginError, validationSchema } from './form'
import { Container } from './styled'

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
        <button type="submit">Login</button>
        <br />
        <button type="submit">Login</button>
      </form>
    </Container>
  )
}

export default LoginForm
