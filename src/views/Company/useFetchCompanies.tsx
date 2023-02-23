import { useCallback, useEffect, useState } from 'react'
import { findAllCompanyPaginated } from '../../service/companies'
import { Company } from '../../types/entity.type'

export const useFetchCompanies = (refetch: boolean) => {
  const [companies, setCompanies] = useState<Company[]>([])
  const [total, setTotal] = useState<number | undefined>()
  const [skip, setSkip] = useState<number | undefined>(0)
  const [take, setTake] = useState<number | undefined>(10)
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<unknown>(null)

  const fetchCompanies = useCallback(async () => {
    setLoading(true)
    try {
      const resp = await findAllCompanyPaginated({
        take,
        skip,
      })
      if (resp.ok && resp.data) {
        setCompanies(resp.data.records)
        setTotal(resp.data.total)
        setSkip(resp.data.skip)
        setTake(resp.data.take)
      }
    } catch (error) {
      setError(error)
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    fetchCompanies()
  }, [fetchCompanies, refetch])

  return { companies, loading, error, take, skip, total, setSkip, setTake }
}
