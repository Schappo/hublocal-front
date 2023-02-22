import { FormikErrors, FormikHelpers } from 'formik'

export type FormikSetErrors<T> = (errors: FormikErrors<T>) => void

export type Formik<T> = FormikHelpers<T> 