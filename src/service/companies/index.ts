import { ApiResponse } from 'apisauce'
import { Company } from '../../types/entity.type'
import { ErrorResponse } from '../../types/responses.type'
import { hublocalApi } from '../api-config'

const BASE_ENDPOINT = '/company'

export const findAll = async (): Promise<ApiResponse<Company[], ErrorResponse>> => {
  return await hublocalApi.get<Company[], ErrorResponse>(`${BASE_ENDPOINT}`)
}

