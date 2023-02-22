import { LocaleObject } from 'yup'



const validationMessages: LocaleObject = {
  mixed: {
    default: ({ path }: any) => ({ key: 'invalidField', value: path }),
    defined: ({ path }: any) => ({ key: 'invalidField', value: path }),
    notNull: ({ path }: any) => ({ key: 'invalidField', value: path }),
    required: ({ path }: any) => ({ key: 'fieldRequired', value: path }),
  },
  string: {
    email: ({ path }: any) => ({ key: 'invalidEmail', value: path }),
    matches: ({ path }: any) => ({ key: 'invalidFormat', value: path }),
    min: ({ min }: any) => ({ key: 'fieldTooShort', value: min }),
    max: ({ max }: any) => ({ key: 'fieldTooBig', value: max }),
    length: ({ length }: any) => ({ key: 'fieldLength', value: length }),
    url: ({ path }: any) => ({ key: 'invalidFormat', value: path }),
  },
  number: {
    min: ({ min }: any) => ({ key: 'fieldTooShort', value: min }),
    max: ({ max }: any) => ({ key: 'fieldTooBig', value: max }),
  }
}

export default validationMessages