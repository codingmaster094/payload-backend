import { GlobalConfig } from 'payload'
export const Kontakt: GlobalConfig = {
  slug: 'kontakt',
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
          label: 'Show hero Section',
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
      name: 'Contact_about',
      type: 'group',
      fields: [
        {
          name: 'show_section',
          label: 'Show Contact_about Section',
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
          label: 'Nested Items',
          fields: [
            {
              name: 'title',
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
        name: 'Map',
      type: 'group',
      fields: [
        {
          name: 'show_section',
          label: 'Show Map Section',
          type: 'checkbox',
          defaultValue: true,
        },
        {
          name: 'title',
          type: 'text',
        },
        {
            name: 'image',
            type: 'upload',
            relationTo: 'media',
          },
          {
            name: 'url',
            type: 'text',
          }
    ]
    },
    {
        name: 'Contact_form',
        type: 'group',
        fields: [
          {
            name: 'show_section',
            label: 'Show Contact_form Section',
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
            name: 'live_chat',
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
          }
    ]
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
