import { useCallback, useEffect, useState } from 'react'
import { findAllCompanyPaginated } from '../../service/companies'
import { Company } from '../../types/entity.type'

export const useFetchCompanies = (refetch: boolean) => {
  const [companies, setCompanies] = useState<Company[]>([])
  const [total, setTotal] = useState<number>(0)
  const [skip, setSkip] = useState<number>(0)
  const [take, setTake] = useState<number>(10)
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<unknown>(null)

  const fetchCompanies = useCallback(async () => {
    setLoading(true)
    try {
      const resp = await findAllCompanyPaginated({
        take,
        skip,
      })
      console.log({ data: resp.data, skip, take })
      if (resp.ok && resp.data) {
        setCompanies(resp.data.records)
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
    fetchCompanies()
  }, [fetchCompanies, refetch, take, skip])

  return { companies, loading, error, take, skip, total, setSkip, setTake }
}
