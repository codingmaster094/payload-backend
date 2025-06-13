import { GlobalConfig } from 'payload'

export const Datenschutzerklarung: GlobalConfig = {
  slug: 'datenschutzerklarung',
  label: 'Datenschutzerklarung',
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

