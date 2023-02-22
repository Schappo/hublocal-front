import { LocaleObject } from 'yup'



const validationMessages: LocaleObject = {
  mixed: {
    default: ({ path }: any) => ({ key: 'invalid_field', values: path }),
    defined: ({ path }: any) => ({ key: 'invalid_field', values: path }),
    notNull: ({ path }: any) => ({ key: 'invalid_field', values: path }),
    required: ({ path }: any) => ({ key: 'field_required', values: path }),
  },
  string: {
    email: ({ path }: any) => ({ key: 'invalid_email', values: path }),
    matches: ({ path }: any) => ({ key: 'invalid_format', values: path }),
    min: ({ min }: any) => ({ key: 'field_too_short', values: min }),
    max: ({ max }: any) => ({ key: 'field_too_big', values: max }),
    length: ({ length }: any) => ({ key: 'field_length', values: length }),

  },
  number: {
    min: ({ min }: any) => ({ key: 'field_too_short', values: min }),
    max: ({ max }: any) => ({ key: 'field_too_big', values: max }),
  }
}

export default validationMessages