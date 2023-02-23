import { Box } from '@mui/material'
import { ReactElement, useMemo, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useLocation } from 'react-router-dom'
import DeleteModal from '../../components/DeleteModal'
import EmptyData from '../../components/EmptyData'
import Header from '../../components/Header'
import ListComponent from '../../components/ListComponent'
import MainContainer from '../../components/MainContainer'
import { deleteLocation } from '../../service/locations'
import { Location } from '../../types/entity.type'
import LocationModalForm from './LocationModalForm'
import { useFetchLocations } from './useFetchLocations'
// import CompanyModalForm from './CompanyModalForm'

function LocationView(): ReactElement {
  const [fetch, setFetch] = useState<boolean>(false)
  const { state } = useLocation()

  const { locations, loading, error, take, skip, total, setSkip, setTake } =
    useFetchLocations(state.id, fetch)
  const [openModal, setOpenModal] = useState(false)
  const [openDeleteModal, setOpenDeleteModal] = useState(false)
  const [location, setLocation] = useState<Location>({} as Location)
  const [t] = useTranslation()
  const isEmptyLocation = useMemo(() => locations.length === 0, [locations])

  const refreshData = () => {
    setFetch(!fetch)
  }

  const handleDeleteLocation = async (id: string): Promise<any> => {
    await deleteLocation(id)
    setOpenDeleteModal(false)
    setLocation({} as Location)
    refreshData()
  }

  const handleCompanyComponent = () => {
    if (loading) return

    if (isEmptyLocation) {
      return (
        <EmptyData
          label={t('noLocationsFound')}
          btnLabel={t('addLocation')}
          onclick={() => setOpenModal(true)}
        />
      )
    } else {
      return (
        <ListComponent
          pagination={{ take, skip, total, setSkip, setTake }}
          setItem={setLocation}
          btnCreateLabel="addLocation"
          headerTable={[{ label: 'location', width: '80%' }]}
          cellFields={['name'] as (keyof Location)[]}
          data={locations}
          setOpenModal={setOpenModal}
          setOpenDeleteModal={setOpenDeleteModal}
          hideLocalActions={false}
        />
      )
    }
  }

  return (
    <div>
      <Header title={t('company', { companyName: state.name })} />
      <MainContainer>
        <Box
          alignItems={'center'}
          justifyContent={'center'}
          minWidth={'85%'}
          margin={50}
          display={'flex'}
          borderRadius={10}
        >
          {handleCompanyComponent()}
        </Box>
      </MainContainer>

      <LocationModalForm
        setOpenModal={setOpenModal}
        openModal={openModal}
        location={location}
        companyId={state.id}
        refreshData={refreshData}
      />

      <DeleteModal
        openModal={openDeleteModal}
        setOpenModal={setOpenDeleteModal}
        item={location}
        setItem={setLocation}
        model={t('location')}
        handleDelete={async (location: Location) => {
          await handleDeleteLocation(location.id!)
        }}
      />
    </div>
  )
}

export default LocationView
