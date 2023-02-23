export * from './formik.type'
export * from './responses.type'
export * from './translation.type'

export type CredentialType = {
  email: string,
  password: string,
}

export type PaginationType = {
  skip: number
  take: number
  total: number
  setSkip: (skip: number) => void
  setTake: (take: number) => void
}