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

  const handleI18nMessage = (error: any) =>
    t(`${error.key}`, { param: error.values })

  return (
    <Container>
      <Label hasError={hasError()}>
        {labelName || fieldName.toUpperCase()}
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
