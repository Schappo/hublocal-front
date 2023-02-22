import { ApiResponse } from 'apisauce'
import { Company } from '../../types/entity.type'
import { ErrorResponse } from '../../types/responses.type'
import { hublocalApi } from '../api-config'

const BASE_ENDPOINT = '/company'

export const findAllCompany = async (): Promise<ApiResponse<Company[], ErrorResponse>> => {
  return await hublocalApi.get<Company[], ErrorResponse>(`${BASE_ENDPOINT}`)
}

export const createCompany = async (company: Company): Promise<ApiResponse<Company, ErrorResponse>> => {
  return await hublocalApi.post<Company, ErrorResponse>(`${BASE_ENDPOINT}`, company)
}

export const updateCompany = async (id: string, company: Company): Promise<ApiResponse<Company, ErrorResponse>> => {
  return await hublocalApi.put<Company, ErrorResponse>(`${BASE_ENDPOINT}/${id}`, company)
}
