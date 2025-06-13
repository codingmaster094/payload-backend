import { GlobalConfig } from 'payload'
export const Home: GlobalConfig = {
  slug: 'home',
  fields: [
    {
      name: 'title',
      type: 'text',
    },
    {
      name: 'slug',
      type: 'text',

      unique: true,
    },
    {
      name: 'hero',
      type: 'group',
      fields: [
        {
          name: 'show_section',
          label: 'Show Hero Section',
          type: 'checkbox',
          defaultValue: true,
        },
        {
          name: 'title',
          type: 'text',
        },
        {
          name: 'content',
          type: 'richText',
        },
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
        },
        {
          name: 'button',
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
      ],
    },
    {
      name: 'companyLogo',
      type: 'group',
      fields: [
        {
          name: 'show_section',
          label: 'Show companyLogo Section',
          type: 'checkbox',
          defaultValue: true,
        },
        {
          name: 'title',
          type: 'text',
        },
        {
          name: 'content',
          type: 'richText',
        },
        {
          name: 'items',
          type: 'array',
          label: 'Company Logos',
          fields: [
            {
              name: 'image',
              type: 'upload',
              relationTo: 'media',
              required: true,
            },
            {
              name: 'link',
              type: 'text',

              admin: {
                placeholder: 'https://example.com',
              },
            },
          ],
        },
      ],
    },
    {
      name: 'GesundheitSection',
      type: 'group',
      fields: [
        {
          name: 'show_section',
          label: 'Show GesundheitSection Section',
          type: 'checkbox',
          defaultValue: true,
        },
        {
          name: 'title',
          type: 'text',
        },
        {
          name: 'description',
          type: 'text',
        },
        {
          name: 'content',
          type: 'richText',
        },
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
          required: true,
        },
        {
          name: 'items',
          type: 'array',
          label: 'Company Logos',
          fields: [
            {
              name: 'title',
              type: 'text',
            },
            {
              name: 'decription',
              type: 'text',
            },
            {
              name: 'content',
              type: 'richText',
            },
            {
              name: 'button',
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
          ],
        },
      ],
    },
    {
      name: 'CTASection',
      type: 'group',
      fields: [
        {
          name: 'show_section',
          label: 'Show CTASection Section',
          type: 'checkbox',
          defaultValue: true,
        },
        {
          name: 'title',
          type: 'text',
        },
        {
          name: 'content',
          type: 'richText',
        },
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
        },
        {
          name: 'button',
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
      ],
    },
    {
      name: 'MeinePraxis',
      type: 'group',
      fields: [
        {
          name: 'show_section',
          label: 'Show MeinePraxis Section',
          type: 'checkbox',
          defaultValue: true,
        },
        {
          name: 'title',
          type: 'text',
        },
        {
          name: 'description',
          type: 'text',
        },
        {
          name: 'content',
          type: 'richText',
        },
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
          required: true,
        },
        {
          name: 'button',
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
      ],
    },
    {
      name: 'Vorteilen_profitieren',
      type: 'group',
      fields: [
        {
          name: 'show_section',
          label: 'Show Vorteilen Section',
          type: 'checkbox',
          defaultValue: true,
        },
        {
          name: 'title',
          type: 'text',
        },
        {
          name: 'items',
          type: 'array',
          label: 'profitieren',
          fields: [
            {
              name: 'title',
              type: 'text',
            },
            {
              name: 'image',
              type: 'upload',
              relationTo: 'media',
              required: true,
            },
            {
              name: 'content',
              type: 'richText',
            },
          ],
        },
      ],
    },
    {
      name: 'CTASection2',
      type: 'group',
      fields: [
        {
          name: 'show_section',
          label: 'Show CTASection2 Section',
          type: 'checkbox',
          defaultValue: true,
        },
        {
          name: 'title',
          type: 'text',
        },
        {
          name: 'content',
          type: 'richText',
        },
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
        },
        {
          name: 'button',
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
      ],
    },
    {
      name: 'Gesundheit_und_Schönheit',
      type: 'group',
      fields: [
        {
          name: 'show_section',
          label: 'Show Gesundheit_und_Schönheit Section',
          type: 'checkbox',
          defaultValue: true,
        },
        {
          name: 'title',
          type: 'text',
        },
        {
          name: 'items',
          type: 'array',
          label: 'Natur',
          fields: [
            {
              name: 'title',
              type: 'text',
            },
            {
              name: 'image',
              type: 'upload',
              relationTo: 'media',
              required: true,
            },
            {
              name: 'content',
              type: 'richText',
            },
          ],
        },
      ],
    },
    {
      name: 'Review_section',
      type: 'group',
      fields: [
        {
          name: 'show_section',
          label: 'Show Review Section',
          type: 'checkbox',
          defaultValue: true,
        }
      ]
    }
  ],
}
