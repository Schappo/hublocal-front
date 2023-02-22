import { ReactElement } from 'react'
import { useTranslation } from 'react-i18next'
import { FooterButton, FooterModalContainer } from './styles'

type FooterModalProps = {
  btnLabel: string
  onBtnClick: () => void
}

function FooterModal({
  btnLabel,
  onBtnClick,
}: FooterModalProps): ReactElement<FooterModalProps> {
  const [t] = useTranslation()
  return (
    <FooterModalContainer>
      <FooterButton type="button" variant="contained" onClick={onBtnClick}>
        {t(btnLabel)}
      </FooterButton>
    </FooterModalContainer>
  )
}

export default FooterModal
