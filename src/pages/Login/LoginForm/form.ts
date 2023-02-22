const invalidPasswordEmail = 'Email e/ou Senha incorretos!'
import * as Yup from 'yup'
import validationMessages from '../../../config/yup-location.config'

export type LoginForm = {
  password: string,
  email: string,
}

Yup.setLocale(validationMessages)

export const validationSchema = Yup.object().shape({
  password: Yup.string().required().min(3).max(100).default(''),
  email: Yup.string().required().email().default(''),
})

export const handlerLoginError = (formik: any) => {
  formik.setErrors({
    email: invalidPasswordEmail,
    password: invalidPasswordEmail,
  })
}

export const initialValues = validationSchema.getDefault()
