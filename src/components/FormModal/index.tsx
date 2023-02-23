import { Box, Modal } from '@mui/material'
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

type FormModalProps = {
  title: string
  openModal: boolean
  setOpenModal: (open: boolean) => void
  children: ReactElement
  btnLabel: string
  formik: any
}

function FormModal({
  openModal,
  setOpenModal,
  children,
  title,
  btnLabel,
  formik,
}: FormModalProps): ReactElement<FormModalProps> {
  const [t] = useTranslation()

  return (
    <FormContainer>
      <Modal
        open={openModal}
        onClose={() => setOpenModal(false)}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <Box sx={boxStyle}>
          <HeaderModal>
            <HeaderTitle>{t(title)}</HeaderTitle>
            <CloseIcon color="#fff" onClick={() => setOpenModal(false)} />
          </HeaderModal>
          <ContentModal>{children}</ContentModal>
          <FooterModal
            onBtnClick={() => {
              formik.submitForm()
            }}
            btnLabel={btnLabel}
          />
        </Box>
      </Modal>
    </FormContainer>
  )
}

export default FormModal
