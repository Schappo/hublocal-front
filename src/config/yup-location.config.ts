import { LocaleObject } from 'yup'



const validationMessages: LocaleObject = {
  mixed: {
    default: ({ path }: any) => ({ key: 'invalid_field', value: path }),
    defined: ({ path }: any) => ({ key: 'invalid_field', value: path }),
    notNull: ({ path }: any) => ({ key: 'invalid_field', value: path }),
    required: ({ path }: any) => ({ key: 'fieldRequired', value: path }),
  },
  string: {
    email: ({ path }: any) => ({ key: 'invalid_email', value: path }),
    matches: ({ path }: any) => ({ key: 'invalid_format', value: path }),
    min: ({ min }: any) => ({ key: 'fieldToo_short', value: min }),
    max: ({ max }: any) => ({ key: 'fieldToo_big', value: max }),
    length: ({ length }: any) => ({ key: 'fieldLength', value: length }),

  },
  number: {
    min: ({ min }: any) => ({ key: 'fieldToo_short', value: min }),
    max: ({ max }: any) => ({ key: 'fieldToo_big', value: max }),
  }
}

export default validationMessages