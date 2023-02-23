import CompanyView from '../views/Company'
import LocationView from '../views/Location'

export const authRoutes = [
  {
    path: '/company',
    component: CompanyView
  },
  {
    path: '/company/location',
    component: LocationView
  }

]