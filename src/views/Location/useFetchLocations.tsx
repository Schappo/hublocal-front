import { useCallback, useEffect, useState } from 'react'
import { findAllLocationPaginated } from '../../service/locations'
import { Location } from '../../types/entity.type'

export const useFetchLocations = (companyId: string, refetch: boolean) => {
  const [locations, setLocations] = useState<Location[]>([])
  const [total, setTotal] = useState<number>(0)
  const [skip, setSkip] = useState<number>(0)
  const [take, setTake] = useState<number>(10)
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<unknown>(null)

  const fetchLocations = useCallback(async () => {
    setLoading(true)
    try {
      const resp = await findAllLocationPaginated({
        companyId,
        take,
        skip,
      })
      if (resp.ok && resp.data) {
        setLocations(resp.data.records)
        setTotal(resp.data.total)
        setSkip(resp.data.skip || 0)
        setTake(resp.data.take || 10)
      }
    } catch (error) {
      setError(error)
    } finally {
      setLoading(false)
    }
  }, [take, skip])

  useEffect(() => {
    fetchLocations()
  }, [fetchLocations, refetch, take, skip])

  return { locations, loading, error, take, skip, total, setSkip, setTake }
}
