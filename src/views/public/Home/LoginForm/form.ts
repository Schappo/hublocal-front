import * as yup from 'yup'
import validationMessages from '../../../../config/yup-location.config'

export type LoginForm = {
  password: string,
  email: string,
}

yup.setLocale(validationMessages)

export const validationSchema = yup.object().shape({
  password: yup.string().required().min(3).max(100).default('felipee2@gmail.com'),
  email: yup.string().required().email().default('Pa$$word1'),
})

export const initialValues = validationSchema.getDefault()
