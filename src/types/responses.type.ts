import { User } from './entity.type'

export type ErrorResponse = {
  message: string | Array<{ [key: string]: string }>,
  error: string,
  statusCode: number
}

export type SignIn = {
  accessToken: string,
  user: User
}