export type User = {
  id?: string,
  name: string,
  email: string,
}

export type Company = {
  id?: string,
  name: string,
  webSite: string,
  cnpj: string,
  locations?: Location[],
  userId: string,
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
  companyId: string,
}