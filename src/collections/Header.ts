import type { CollectionConfig } from 'payload'

export const Header: CollectionConfig = {
    slug: 'header',
    labels: {
        singular: 'Header ',
        plural: 'Header ',
      },
      fields: [
        {
          name: 'logo',
          type: 'upload',
          relationTo: 'media', // Assuming you have a media collection
        },
        {
          name: 'navigationLinks',
          type: 'array',
          fields: [
            {
              name: 'label',
              type: 'text',
            },
            {
              name: 'url',
              type: 'text',
            },
          ],
        },
        {
          name: 'contactInfo',
          type: 'group',
          fields: [
            {
              name: 'phone',
              type: 'text',
            },
            {
              name: 'email',
              type: 'text',
            },
          ],
        },
        {
          name: 'socialMedia',
          type: 'array',
          fields: [
            {
              name: 'platform',
              type: 'text',
            },
            {
              name: 'url',
              type: 'text',
            },
          ],
        },
    ],
    upload: true,
  };
  