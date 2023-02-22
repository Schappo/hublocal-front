import { ApiResponse } from 'apisauce'
import { CredentialType } from '../../types'
import { User } from '../../types/entity.type'
import { ErrorResponse, SignIn } from '../../types/responses.type'
// import { ErrorResponse, SingIn } from '../../../shared/interfaces'
import { hublocalApi } from '../api-config'

const BASE_ENDPOINT = '/auth'

export const signUp = async (user: User): Promise<ApiResponse<User, ErrorResponse>> => {
  return await hublocalApi.post<User, ErrorResponse>(`${BASE_ENDPOINT}/sign-in`, user)
}

export const signIn = async (credentials: CredentialType): Promise<ApiResponse<SignIn, ErrorResponse>> => {
  return await hublocalApi.post<SignIn, ErrorResponse>(`${BASE_ENDPOINT}/login`, credentials)
}

// export const getUser = async (): Promise<ApiResponse<User, ErrorResponse>> => {
//   return await apiConfig.client.get(`${BASE_ENDPOINT}/profile`)
// }
