export type ErrorResponse = {
  message: string | Array<{ [key: string]: string }>,
  error: string,
  statusCode: number
}

export type SignIn = {
  access_token: string
}