export type User = {
  id?: string,
  name: string,
  email: string,
}

export type PaginatedResponse<T> = {
  records: T[],
  total: number,
  skip?: number,
  take?: number,
}

export type Company = {
  id?: string,
  name: string,
  webSite: string,
  cnpj: string,
  userId?: string,
  qtyLocations?: number,
}

export type Location = {
  id?: string,
  name: string,
  postalCode: string,
  street: string,
  state: string,
  city: string,
  number: string,
  district: string,
  companyId?: string,
}