import { Box, Modal as ModalMUI } from '@mui/material'
import { ReactElement } from 'react'
import { useTranslation } from 'react-i18next'
import CloseIcon from './CloseIcon'
import FooterModal from './FooterModal'
import {
  boxStyle,
  ContentModal,
  FormContainer,
  HeaderModal,
  HeaderTitle,
} from './styles'

type ModalProps<T> = {
  title: string
  openModal: boolean
  setOpenModal: (open: boolean) => void
  children: ReactElement
  btnLabel: string
  handleClickBtn: (item: T) => Promise<any>
  color?: string
  colorBtn?: 'primary' | 'secondary' | 'error' | 'info' | 'success' | 'warning'
  item: T
}

function Modal<T>({
  openModal,
  setOpenModal,
  children,
  title,
  btnLabel,
  item,
  handleClickBtn,
  color,
  colorBtn,
}: ModalProps<T>): ReactElement<ModalProps<T>> {
  const [t] = useTranslation()

  return (
    <FormContainer>
      <ModalMUI
        open={openModal}
        onClose={() => setOpenModal(false)}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <Box sx={boxStyle}>
          <HeaderModal color={color}>
            <HeaderTitle>{t(title)}</HeaderTitle>
            <CloseIcon color="#fff" onClick={() => setOpenModal(false)} />
          </HeaderModal>
          <ContentModal>{children}</ContentModal>
          <FooterModal
            color={colorBtn}
            onBtnClick={async () => await handleClickBtn(item)}
            btnLabel={btnLabel}
          />
        </Box>
      </ModalMUI>
    </FormContainer>
  )
}

export default Modal
