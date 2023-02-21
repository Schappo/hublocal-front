import { TextField } from '@mui/material'
import { ReactElement } from 'react'
import { Container, Label } from './styled'

type InputTextProps = {
  error?: boolean
  id?: string
  value: string
  name: string
  type: string
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

function InputText(props: InputTextProps): ReactElement<InputTextProps> {
  const { type, error = false, id, name, value, ...rest } = props

  return (
    <Container>
      <Label>{name}</Label>
      <TextField
        {...rest}
        type={type}
        error={error}
        id={id || name}
        name={name}
        value={value}
      />
    </Container>
  )
}

export default InputText
