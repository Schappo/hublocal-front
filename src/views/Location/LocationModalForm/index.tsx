import Grid from '@mui/material/Unstable_Grid2/Grid2'
import { useFormik } from 'formik'
import { ReactElement, useEffect } from 'react'
import InputText from '../../../components/InputText'
import { default as Modal } from '../../../components/Modal'
import { createLocation, updateLocation } from '../../../service/locations'
import { Location } from '../../../types/entity.type'
import {
  handleLocationFormErrors,
  initialValues,
  validationSchema,
} from './form'

export type LocationModalFormProps = {
  location?: Location
  openModal: boolean
  setOpenModal: (open: boolean) => void
  refreshData: () => void
  companyId: string
}

function LocationModalForm({
  setOpenModal,
  openModal,
  refreshData,
  companyId,
  location,
}: LocationModalFormProps): ReactElement<LocationModalFormProps> {
  const isUpdate = !!location?.id

  const handleOnSubmitForm = async (values: Location) => {
    if (isUpdate) {
      return await updateLocation(location!.id!, { ...values })
    } else {
      return await createLocation({ ...values, companyId })
    }
  }

  const formik = useFormik({
    initialValues: location || initialValues,
    validationSchema,
    validateOnChange: false,

    onSubmit: async (values, formik) => {
      const resp = await handleOnSubmitForm(values)

      if (!resp.ok) {
        handleLocationFormErrors(resp, formik)
        console.log('error', resp.data)
      } else {
        setOpenModal(false)
        formik.resetForm()
        refreshData()
      }
    },
  })

  useEffect(() => {
    if (location?.id) {
      formik.setValues(location)
    } else {
      formik.resetForm()
    }
  }, [location])

  const handleCloseModal = () => {
    setOpenModal(false)
    formik.resetForm()
  }

  return (
    <Modal
      item={location}
      openModal={openModal}
      setOpenModal={handleCloseModal}
      title={isUpdate ? 'updateLocation' : 'addLocation'}
      btnLabel={isUpdate ? 'updateLocation' : 'addLocation'}
      handleClickBtn={() => formik.submitForm()}
    >
      <form onSubmit={formik.handleSubmit}>
        <Grid container justifyContent="center" spacing={2} columnSpacing={2}>
          <Grid xs={12} sm={10}>
            <InputText type="text" fieldName="name" formik={formik} />
          </Grid>
          <Grid xs={6} sm={5}>
            <InputText type="text" fieldName="postalCode" formik={formik} />
          </Grid>
          <Grid xs={6} sm={5}>
            <InputText type="text" fieldName="street" formik={formik} />
          </Grid>
          <Grid xs={6} sm={5}>
            <InputText type="text" fieldName="number" formik={formik} />
          </Grid>
          <Grid xs={6} sm={5}>
            <InputText type="text" fieldName="district" formik={formik} />
          </Grid>
          <Grid xs={6} sm={5}>
            <InputText type="text" fieldName="city" formik={formik} />
          </Grid>
          <Grid xs={6} sm={5}>
            <InputText type="text" fieldName="state" formik={formik} />
          </Grid>
        </Grid>
      </form>
    </Modal>
  )
}

export default LocationModalForm
