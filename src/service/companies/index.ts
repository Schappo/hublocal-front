import { ApiResponse } from 'apisauce'
import { Company, PaginatedResponse } from '../../types/entity.type'
import { ErrorResponse } from '../../types/responses.type'
import { hublocalApi } from '../api-config'

const BASE_ENDPOINT = '/company'

export const findAllCompany = async (): Promise<ApiResponse<Company[], ErrorResponse>> => {
  return await hublocalApi.get<Company[], ErrorResponse>(`${BASE_ENDPOINT}`)
}

export const findAllCompanyPaginated = async (query?: Partial<Company & { skip: number, take: number }>): Promise<ApiResponse<PaginatedResponse<Company>, ErrorResponse>> => {
  let queryStr = !!query && Object.keys(query).map((key) => `${key}=${(query as Record<string, any>)[key]}`).join('&')
  queryStr = queryStr ? `?${queryStr}` : ''

  console.log('queryStr', queryStr)
  return await hublocalApi.get<PaginatedResponse<Company>, ErrorResponse>(
    `${BASE_ENDPOINT}/paginated${queryStr}`
  )
}

export const createCompany = async (company: Company): Promise<ApiResponse<Company, ErrorResponse>> => {
  return await hublocalApi.post<Company, ErrorResponse>(`${BASE_ENDPOINT}`, company)
}

export const updateCompany = async (id: string, company: Company): Promise<ApiResponse<Company, ErrorResponse>> => {
  return await hublocalApi.put<Company, ErrorResponse>(`${BASE_ENDPOINT}/${id}`, company)
}
