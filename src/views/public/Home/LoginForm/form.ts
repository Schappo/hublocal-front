import * as yup from 'yup'
import validationMessages from '../../../../config/yup-location.config'

export type LoginForm = {
  password: string,
  email: string,
}

yup.setLocale(validationMessages)

export const validationSchema = yup.object().shape({
  password: yup.string().required().min(3).max(100).default('felipe@gmail.com'),
  email: yup.string().required().email().default('felipe@gmail.com'),
})

export const initialValues = validationSchema.getDefault()
