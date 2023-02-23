import Grid from '@mui/material/Unstable_Grid2/Grid2'
import { useFormik } from 'formik'
import { ReactElement, useEffect } from 'react'
import { useAuth } from '../../../components/AuthUserContext'
import FormModal from '../../../components/FormModal'
import InputText from '../../../components/InputText'
import { createCompany, updateCompany } from '../../../service/companies'
import { Company } from '../../../types/entity.type'
import { initialValues, validationSchema } from './form'

export type CompanyModalFormProps = {
  company?: Company
  openModal: boolean
  setOpenModal: (open: boolean) => void
  refreshData: () => void
}

function CompanyModalForm({
  setOpenModal,
  openModal,
  refreshData,
  company,
}: CompanyModalFormProps): ReactElement<CompanyModalFormProps> {
  const { user } = useAuth()

  const isUpdate = !!company?.id

  const handleOnSubmitForm = async (values: any) => {
    if (isUpdate) {
      return await updateCompany(company!.id!, { ...values })
    } else {
      return await createCompany({ ...values, userId: user.id || '' })
    }
  }

  const formik = useFormik({
    initialValues: company || initialValues,
    validationSchema,
    validateOnChange: false,

    onSubmit: async (values, formik) => {
      const resp = await handleOnSubmitForm(values)
      if (!resp.ok) {
        // handleSignInErrors(resp, formik)
        console.log('error', resp.data)
      }
      setOpenModal(false)
      formik.resetForm()
      refreshData()
    },
  })

  useEffect(() => {
    if (company?.id) {
      formik.setValues(company)
    }
  }, [company])

  const handleCloseModal = () => {
    setOpenModal(false)
    formik.resetForm()
  }

  return (
    <FormModal
      openModal={openModal}
      setOpenModal={handleCloseModal}
      title={isUpdate ? 'updateCompany' : 'addCompany'}
      btnLabel={isUpdate ? 'updateCompany' : 'addCompany'}
      formik={formik}
    >
      <form onSubmit={formik.handleSubmit}>
        <Grid container justifyContent="center" spacing={2} columnSpacing={2}>
          <Grid xs={12} sm={10}>
            <InputText type="text" fieldName="name" formik={formik} />
          </Grid>
          <Grid xs={6} sm={5}>
            <InputText type="text" fieldName="webSite" formik={formik} />
          </Grid>
          <Grid xs={6} sm={5}>
            <InputText type="text" fieldName="cnpj" formik={formik} />
          </Grid>
        </Grid>
      </form>
    </FormModal>
  )
}

export default CompanyModalForm
