import { GlobalConfig } from 'payload'

export const Impressum: GlobalConfig = {
  slug: 'impressum',
  label: 'Impressum',
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'content',
      type: 'richText',
      required: true,
    },
  ],
}

