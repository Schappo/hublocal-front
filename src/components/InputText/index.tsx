import { TextField } from '@mui/material'
import { ReactElement } from 'react'
import { useTranslation } from 'react-i18next'
import { Container, Label } from './styled'

type InputTextProps = {
  error?: boolean
  id?: string
  fieldName: string
  labelName?: string
  type: string
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
  formik: any
}

function InputText(props: InputTextProps): ReactElement<InputTextProps> {
  const [t] = useTranslation()
  const {
    type,
    error = false,
    id,
    fieldName,
    formik,
    labelName,
    onChange,
    ...rest
  } = props

  const hasError = () => formik.errors[fieldName] && formik.touched[fieldName]

  const handleI18nMessage = (
    error: string | { key: string; value: string },
  ) => {
    if (typeof error === 'string') {
      return t(error)
    }
    return t(`${error.key}`, { param: error.value })
  }

  return (
    <Container>
      <Label hasError={hasError()}>
        {t(`fields.${labelName || fieldName}`)}
      </Label>
      <TextField
        {...rest}
        type={type}
        error={hasError()}
        helperText={hasError() && handleI18nMessage(formik.errors[fieldName])}
        id={id || fieldName}
        name={fieldName}
        value={formik.values[fieldName] || ''}
        onChange={onChange || formik.handleChange}
      />
    </Container>
  )
}

export default InputText
