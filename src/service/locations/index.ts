import { ApiResponse } from 'apisauce'
import { ErrorResponse } from '../../types'
import { Location, PaginatedResponse } from '../../types/entity.type'
import { hublocalApi } from '../api-config'

const BASE_ENDPOINT = '/location'

export const findAllLocationPaginated = async (query?: Partial<Location & { skip: number, take: number }>): Promise<ApiResponse<PaginatedResponse<Location>, ErrorResponse>> => {
  let queryStr = !!query && Object.keys(query).map((key) => `${key}=${(query as Record<string, any>)[key]}`).join('&')
  queryStr = queryStr ? `?${queryStr}` : ''

  return await hublocalApi.get<PaginatedResponse<Location>, ErrorResponse>(
    `${BASE_ENDPOINT}/paginated${queryStr}`
  )
}

export const createLocation = async (location: Partial<Location>): Promise<ApiResponse<Location, ErrorResponse>> => {
  return await hublocalApi.post<Location, ErrorResponse>(
    `${BASE_ENDPOINT}`,
    location
  )
}

export const updateLocation = async (id: string, location: Partial<Location>): Promise<ApiResponse<Location, ErrorResponse>> => {
  return await hublocalApi.put<Location, ErrorResponse>(
    `${BASE_ENDPOINT}/${id}`,
    location
  )
}

export const deleteLocation = async (id: string): Promise<ApiResponse<null, ErrorResponse>> => {
  return await hublocalApi.delete<null, ErrorResponse>(
    `${BASE_ENDPOINT}/${id}`
  )
}