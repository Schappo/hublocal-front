import { ApiErrorResponse } from 'apisauce'
import * as yup from 'yup'
import validationMessages from '../../../config/yup-location.config'
import { ErrorResponse } from '../../../types'

export type SignInForm = {
  password: string,
  repeatPassword: string,
  email: string,
  name: string,
}

yup.setLocale(validationMessages)

export const validationSchema = yup.object().shape({
  password: yup.string().required().min(3).max(100).default(''),
  repeatPassword: yup.string().oneOf([yup.ref('password'), ''], 'Passwords must match').required(),
  email: yup.string().required().email().default(''),
  name: yup.string().required().min(3).max(100).default('')
})

export const handleSignInErrors = async (resp: ApiErrorResponse<ErrorResponse>, formik: any) => {
  if ([401, 403].includes(resp.status || 0)) {
    formik.setFieldError('password', 'invalidEmailOrPassword')
    formik.setFieldError('email', 'invalidEmailOrPassword')
  }
  if (resp.status === 400) {
    (resp.data?.message as []).forEach((error: { property: string, constraints: Record<string, string> }) => {
      Object.keys(error.constraints).forEach((message: string) => {
        formik.setFieldError(error.property, message)
      })
    })
  }
}

export const initialValues = validationSchema.getDefault()
