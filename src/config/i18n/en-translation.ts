import { TranslationType } from '../../types/translation.type'

export const enTranslation: TranslationType = {
  invalidEmailOrPassword: 'Invalid email or password!',
  invalidEmail: 'Invalid email!',
  invalidField: 'Invalid field!',
  invalidFormat: 'Invalid format!',
  fieldRequired: 'Field required!',
  fieldTooShort: 'Field too short! Must have {{param}} or more characters!',
  fieldLength: 'Field must have {{param}} characters!',
  fieldTooBig: 'Field too big! Can only have {{param}} characters!',
  isStrongPassword: 'Password Must be at least 8 characters long, contain at least one lowercase letter, one uppercase letter, one number and one symbol.',
  isEmail: 'Invalid email!',
  noCompaniesFound: 'No companies found!',
  addCompany: 'Add company',
  company: 'Company',
  qtdLocations: 'Qtd of locations',
  actions: 'Actions',
  updateCompany: 'Update Company',


  fields: {
    name: 'Name',
    email: 'Email',
    password: 'Password',
    repeatPassword: 'Confirm password',
    cnpj: 'CNPJ',
    webSite: 'Web site',
  }
}