import { LocaleObject } from 'yup'



const validationMessages: LocaleObject = {
  mixed: {
    default: ({ path }: any) => ({ key: 'invalid_field', value: path }),
    defined: ({ path }: any) => ({ key: 'invalid_field', value: path }),
    notNull: ({ path }: any) => ({ key: 'invalid_field', value: path }),
    required: ({ path }: any) => ({ key: 'field_required', value: path }),
  },
  string: {
    email: ({ path }: any) => ({ key: 'invalid_email', value: path }),
    matches: ({ path }: any) => ({ key: 'invalid_format', value: path }),
    min: ({ min }: any) => ({ key: 'field_too_short', value: min }),
    max: ({ max }: any) => ({ key: 'field_too_big', value: max }),
    length: ({ length }: any) => ({ key: 'field_length', value: length }),

  },
  number: {
    min: ({ min }: any) => ({ key: 'field_too_short', value: min }),
    max: ({ max }: any) => ({ key: 'field_too_big', value: max }),
  }
}

export default validationMessages