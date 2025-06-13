import type { CollectionConfig } from 'payload'

export const Review: CollectionConfig = {
  slug: 'review',
  access: {
    read: () => true,
  },
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
      name: 'Logos_items',
      type: 'array',
      label: 'Logos',
      fields: [
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
          required: true,
        },
        {
          name: 'url',
          type: 'text',
          required: false,
        },
      ],
    },
    {
      name: 'Review_items',
      type: 'array',
      label: 'Reviews',
      fields: [
        {
          name: 'title',
          type: 'text',
        },
        {
          name: 'date',
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
              required: false,
            },
            {
              name: 'url',
              type: 'text',
              required: false,
            },
          ],
        },
      ],
    },
  ],
}
