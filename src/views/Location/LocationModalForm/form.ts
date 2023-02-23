import { ApiErrorResponse } from 'apisauce'
import * as yup from 'yup'
import validationMessages from '../../../config/yup-location.config'
import { ErrorResponse } from '../../../types'

yup.setLocale(validationMessages)

const validateString = yup.string().required().min(3).max(100).default('')

export const validationSchema = yup.object().shape({
  name: validateString,
  postalCode: validateString,
  street: validateString,
  state: validateString,
  city: validateString,
  number: validateString,
  district: validateString,
})

export const handleLocationFormErrors = async (resp: ApiErrorResponse<ErrorResponse>, formik: any) => {
  (resp.data?.message as []).forEach((error: { property: string, constraints: Record<string, string> }) => {
    Object.keys(error.constraints).forEach((message: string) => {
      formik.setFieldError(error.property, message)
    })
  })
}

export const initialValues = validationSchema.getDefault()
