export type TranslationType = {
  invalidField: string,
  fieldRequired: string,
  invalidEmail: string,
  invalidFormat: string,
  fieldTooShort: string,
  fieldTooBig: string,
  fieldLength: string,
  invalidEmailOrPassword: string,
  isStrongPassword: string,
  isEmail: string,
  addCompany: string,
  noCompaniesFound: string,
  fields: Fields,
  company: string,
  qtdLocations: string,
  actions: string,
  updateCompany: string,

}

type Fields = {
  name: string,
  email: string,
  password: string,
  repeatPassword: string,
  webSite: string,
  cnpj: string,
}