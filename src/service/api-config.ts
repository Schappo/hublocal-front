import { create } from 'apisauce'
import { getObject } from '../helpers/storage.helper'

const { VITE_APP_API_URL } = import.meta.env

export const hublocalApi = create({
  baseURL: VITE_APP_API_URL,
  headers: {
    'Content-Type': 'application/json',
    'authorization': 'Bearer ' + getObject('accessToken')
  },
})

export const setAuthorizationToken = (token: string) => {
  hublocalApi.setHeader('authorization', ('Bearer ' + token))
}

const homeUrl = '/login'

hublocalApi.addResponseTransform((resp) => {
  if ([401].includes((resp.status || 0))) {
    window.location.href = homeUrl
  }
})

export default {
  hublocalApi
}