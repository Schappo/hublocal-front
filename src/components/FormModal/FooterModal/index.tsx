import { ReactElement } from 'react'
import { FooterModalContainer } from './styles'

type FooterModalProps = {
  title: string
}

function FooterModal(props: FooterModalProps): ReactElement<FooterModalProps> {
  return (
    <FooterModalContainer>
      <div>Footer</div>
    </FooterModalContainer>
  )
}

export default FooterModal
