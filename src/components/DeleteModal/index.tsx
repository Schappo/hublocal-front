import { ReactElement } from 'react'
import { useTranslation } from 'react-i18next'
import Modal from '../Modal'

type DeleteModalProps<T> = {
  openModal: boolean
  setOpenModal: (openModal: boolean) => void
  handleDelete: (item: T) => Promise<void>
  item: T
  setItem: (item: T) => void
  model: string
}

function DeleteModal<T>({
  openModal,
  setOpenModal,
  item,
  setItem,
  handleDelete,
  model,
}: DeleteModalProps<T>): ReactElement<DeleteModalProps<T>> {
  const [t] = useTranslation()
  const handleCloseModal = () => {
    setOpenModal(false)
    setItem({} as T)
  }
  return (
    <>
      <Modal
        openModal={openModal}
        setOpenModal={handleCloseModal}
        title="Delete"
        handleClickBtn={handleDelete}
        btnLabel={t('delete')}
        color="#d32f2f"
        colorBtn="error"
        item={item}
      >
        <>{t('deleteMessage', { model })}</>
      </Modal>
    </>
  )
}

export default DeleteModal
