import { ReactElement } from 'react'
import { useTranslation } from 'react-i18next'
import { FooterButton, FooterModalContainer } from './styles'

type FooterModalProps<T> = {
  btnLabel: string
  onBtnClick: any
  color?: 'primary' | 'secondary' | 'error' | 'info' | 'success' | 'warning'
}

function FooterModal<T>({
  btnLabel,
  onBtnClick,
  color,
}: FooterModalProps<T>): ReactElement<FooterModalProps<T>> {
  const [t] = useTranslation()
  return (
    <FooterModalContainer>
      <FooterButton
        color={color || 'primary'}
        type="button"
        variant="contained"
        onClick={onBtnClick}
      >
        {t(btnLabel)}
      </FooterButton>
    </FooterModalContainer>
  )
}

export default FooterModal
