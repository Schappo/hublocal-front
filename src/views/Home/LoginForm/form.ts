import { ApiResponse } from 'apisauce'
import * as yup from 'yup'
import validationMessages from '../../../config/yup-location.config'
import { ErrorResponse, SignIn } from '../../../types'

export type LoginForm = {
  password: string,
  email: string,
}

yup.setLocale(validationMessages)

export const validationSchema = yup.object().shape({
  password: yup.string().required().min(3).max(100).default(''),
  email: yup.string().required().email().default(''),
})

export const handleLoginErrors = async (resp: ApiResponse<SignIn | ErrorResponse>, formik: any) => {
  if ([401, 403].includes(resp.status || 0)) {
    formik.setFieldError('password', 'invalidEmailOrPassword')
    formik.setFieldError('email', 'invalidEmailOrPassword')
  }
}

export const initialValues = validationSchema.getDefault()
