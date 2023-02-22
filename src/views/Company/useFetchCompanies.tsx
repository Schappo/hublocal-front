import { useCallback, useEffect, useState } from 'react'
import { findAll } from '../../service/companies'
import { Company } from '../../types/entity.type'

export const useFetchCompanies = () => {
  const [companies, setCompanies] = useState<Company[]>([])
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<unknown>(null)

  const fetchCompanies = useCallback(async () => {
    setLoading(true)
    try {
      const resp = await findAll()
      if (resp.ok && resp.data) setCompanies(resp.data)
    } catch (error) {
      setError(error)
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    fetchCompanies()
  }, [fetchCompanies])

  return { companies, loading, error }
}
