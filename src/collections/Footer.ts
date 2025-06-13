import type { CollectionConfig } from 'payload'
export const Footer: CollectionConfig = {
  slug: 'footer',
  labels: {
    singular: 'Footer',
    plural: 'Footer',
  },
  fields: [
    {
      name: 'logo',
      label: 'Logo',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },{
      name: 'contact',
      label: 'Kontakt',
      type: 'group',
      fields: [
        {
          name: 'address',
          type: 'group',
          fields: [
            {
              name: 'text',
              type: 'text',
            },
            {
              name: 'url',
              type: 'text',
            },
          ],
        },
        {
          name: 'phone',
          type: 'group',
          fields: [
            {
              name: 'text',
              type: 'text',
            },
            {
              name: 'url',
              type: 'text',
            },
          ],
        },
        {
          name: 'whatsaap',
          type: 'group',
          fields: [
            {
              name: 'text',
              type: 'text',
            },
            {
              name: 'url',
              type: 'text',
            },
          ],
        },
        {
          name: 'email',
          type: 'group',
          fields: [
            {
              name: 'text',
              type: 'text',
            },
            {
              name: 'url',
              type: 'text',
            },
          ],
        },
        {
          name: 'social',
          label: 'Social Icons',
          type: 'array',
          fields: [
            {
              name: 'platform',
              label: 'platform Logo',
              type: 'upload',
              relationTo: 'media',
            },
            {
              name: 'url',
              label: 'URL',
              type: 'text',
            },
          ],
        },
      ],
    },{
      name: 'sprechzeiten',
      label: 'Sprechzeiten',
      type: 'array',
      fields: [
        {
          name: 'tag',
          label: 'Tag',
          type: 'text',
        },
        {
          name: 'zeit',
          label: 'Zeit',
          type: 'text',
        },
      ],
      defaultValue: [
        { tag: 'Montag', zeit: '8:00-17:00' },
        { tag: 'Dienstag', zeit: '8:00-17:00' },
        { tag: 'Mittwoch', zeit: '8:00-17:00' },
        { tag: 'Donnerstag', zeit: '8:00-17:00' },
        { tag: 'Freitag', zeit: '8:00-17:00' },
      ],
    },{
      name: 'navigation',
      label: 'Navigation',
      type: 'array',
      fields: [
        {
          name: 'label',
          label: 'Label',
          type: 'text',
        },
        {
          name: 'link',
          label: 'Link',
          type: 'text',
        },
      ],
      defaultValue: [
        { label: 'Behandlungen', link: '/behandlungen' },
        { label: 'Über uns', link: '/ueber-uns' },
        { label: 'Rodenkirchen', link: '/rodenkirchen' },
        { label: 'Südstadt', link: '/suedstadt' },
        { label: 'Hürth', link: '/huerth' },
        { label: 'Kooperationen', link: '/kooperationen' },
        { label: 'Kontakt', link: '/kontakt' },
      ],
    },{
      name: 'rechtliches',
      label: 'Rechtliches',
      type: 'array',
      fields: [
        {
          name: 'label',
          label: 'Label',
          type: 'text',
        },
        {
          name: 'link',
          label: 'Link',
          type: 'text',
        },
      ],
      defaultValue: [
        { label: 'Impressum', link: '/impressum' },
        { label: 'Datenschutzerklärung', link: '/datenschutz' },
      ],
    },{
      name: 'company_logos',
      label: 'Unternehmenslogos',
      type: 'array',
      fields: [
        {
          name: 'logo',
          label: 'Logo',
          type: 'upload',
          relationTo: 'media',
        },
      ],
      maxRows: 2,
    },
  ],
  upload: true,
}
