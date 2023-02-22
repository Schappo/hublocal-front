import { ApiResponse } from 'apisauce'
import { CredentialType } from '../../types'
import { ErrorResponse, SignIn } from '../../types/responses.type'
// import { ErrorResponse, SingIn } from '../../../shared/interfaces'
import { hublocalApi } from '../api-config'

const BASE_ENDPOINT = '/auth'



export const signIn = async (credentials: CredentialType): Promise<ApiResponse<SignIn, ErrorResponse>> => {
  const resp = await hublocalApi.post<SignIn, ErrorResponse>(`${BASE_ENDPOINT}/login`, credentials)
  // if (resp.ok && resp.data.access_token) {
  //   const { access_token: accessToken } = resp.data
  //   setToken(accessToken)
  //   apiConfig.setAuthorizarionToken(accessToken)
  // }

  console.log('error', resp)

  return resp
}

// export const getUser = async (): Promise<ApiResponse<User, ErrorResponse>> => {
//   return await apiConfig.client.get(`${BASE_ENDPOINT}/profile`)
// }
