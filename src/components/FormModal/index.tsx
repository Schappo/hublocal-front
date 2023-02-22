import { Box, Modal } from '@mui/material'
import { ReactElement } from 'react'
import CloseIcon from './CloseIcon'
import FooterModal from './FooterModal'
import { ContentModal, FormContainer, HeaderModal, HeaderTitle } from './styles'

type FormModalProps = {
  title: string
  openModal: boolean
  setOpenModal: (open: boolean) => void
  children: ReactElement
}

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  display: 'flex',
  flexDirection: 'column',
  transform: 'translate(-50%, -50%)',
  minWidth: '30%',
  minHeight: '50%',
  bgcolor: 'background.paper',
  borderRadius: '10px',
  boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
}

function FormModal({
  openModal,
  setOpenModal,
  children,
  title,
}: FormModalProps): ReactElement<FormModalProps> {
  return (
    <FormContainer>
      <Modal
        open={openModal}
        onClose={() => setOpenModal(false)}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <Box sx={style}>
          <HeaderModal>
            <HeaderTitle>{title}</HeaderTitle>
            <CloseIcon color="#fff" onClick={() => setOpenModal(false)} />
          </HeaderModal>
          <ContentModal>{children}</ContentModal>
          <FooterModal title="rtewst" />
        </Box>
      </Modal>
    </FormContainer>
  )
}

export default FormModal