import { create } from 'apisauce'

const { VITE_APP_API_URL } = import.meta.env

console.log('VITE_APP_API_URL', import.meta.env)

export const hublocalApi = create({
  baseURL: VITE_APP_API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
})

// const homeUrl = '/login'

// hublocalApi.addResponseTransform((resp) => {
//   if ([401].includes((resp.status || 0))) {
//     window.location.href = homeUrl
//   }
// })

export default {
  hublocalApi
}