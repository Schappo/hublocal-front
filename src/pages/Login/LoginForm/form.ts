const invalidPasswordEmail = 'Email e/ou Senha incorretos!'
import * as Yup from 'yup'

export type LoginForm = {
  password: string,
  email: string,
}

export const validationSchema = Yup.object().shape({
  password: Yup.string().min(3).max(100).required().default(''),
  email: Yup.string().email('Email inválido!').required().default(''),
})

export const handlerLoginError = (formik: any) => {
  formik.setErrors({
    email: invalidPasswordEmail,
    password: invalidPasswordEmail,
  })
}

export const initialValues = validationSchema.cast({})
