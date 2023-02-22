import { Button as ButtonMUI } from '@mui/material'
import { ReactElement } from 'react'

type ButtonColorType =
  | 'inherit'
  | 'primary'
  | 'secondary'
  | 'error'
  | 'info'
  | 'success'
  | 'warning'
type ButtonSizeType = 'small' | 'medium' | 'large'
type ButtonVariantType = 'text' | 'outlined' | 'contained'
type ButtonTypeType = 'submit' | 'reset' | 'button'

type ButtonProps = {
  type: ButtonTypeType
  onClick?: () => void
  variant?: ButtonVariantType
  disabled?: boolean
  color?: ButtonColorType
  size?: ButtonSizeType
  children?: React.ReactNode
  fullWidth?: boolean
}

function Button(props: ButtonProps): ReactElement<ButtonProps> {
  const {
    disabled,
    variant,
    color,
    size,
    onClick,
    type,
    children,
    fullWidth,
    ...rest
  } = props
  return (
    <ButtonMUI
      {...rest}
      type={type}
      disabled={disabled}
      variant={variant}
      color={color}
      size={size}
      onClick={onClick}
      fullWidth={fullWidth}
    >
      {children}
    </ButtonMUI>
  )
}

export default Button
