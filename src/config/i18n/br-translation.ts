import { TranslationType } from '../../types/translation.type'

export const brTranslation: TranslationType = {
  invalidEmailOrPassword: 'Email ou senha inválidos!',
  invalidEmail: 'Email inválido!',
  invalidField: 'Campo inválido!',
  invalidFormat: 'Formato inválido!',
  fieldRequired: 'Campo obrigatório!',
  fieldTooShort: 'Campo muito curto! Tem que ter {{param}} ou mais caracteres!',
  fieldLength: 'Campo deve ter {{param}} caracteres!',
  fieldTooBig: 'Campo muito grande! Só pode ter {{param}} caracteres!',
  isStrongPassword: 'Senha muito fraca! Mínimo de 8 caracteres, uma letra maiúscula, uma minúscula, um número e um caracter especial!',
  isEmail: 'Email inválido!',
  noCompaniesFound: 'Nenhuma empresa cadastrada!',
  noLocationsFound: 'Nenhum local cadastrado!',
  addCompany: 'Adicionar empresa',
  company: 'Empresa {{ companyName }}',
  qtdLocations: 'Qtd de locais',
  actions: 'Ações',
  updateCompany: 'Atualizar empresa',
  cnpjExists: 'CNPJ já cadastrado!',
  IsCnpjConstraint: 'CNPJ inválido!',
  deleteMessage: 'Tem certeza que deseja deletar {{model}}?',
  addLocation: 'Adicionar local',
  location: 'Local',
  updateLocation: 'Atualizar local',
  companyLabel: 'Empresa',

  fields: {
    name: 'Nome',
    email: 'Email',
    password: 'Senha',
    repeatPassword: 'Repetir senha',
    cnpj: 'CNPJ',
    webSite: 'Site',
    postalCode: 'CEP',
    street: 'Rua',
    state: 'Estado',
    city: 'Cidade',
    number: 'Número',
    district: 'Bairro',

  }
}