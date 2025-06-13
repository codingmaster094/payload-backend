import { CollectionConfig } from 'payload'
export const LandingPages: CollectionConfig = {
  slug: 'landing',
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
      name: 'pageSections',
      label: 'Page Sections',
      type: 'blocks',
      blocks: [
        {
          slug: 'multiple-section',
          labels: {
            singular: 'Multiple Section',
            plural: 'Multiple Sections',
          },
          fields: [
            {
              name: 'show_section',
              label: 'Show multiple-section Section',
              type: 'checkbox',
              defaultValue: true,
            },
            {
              name: 'sectionID',
              type: 'text',
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
            },
            {
              name: 'Reverse_image',
              label: 'Right_Side_image',
              type: 'checkbox',
            },
            {
              name: 'Small_image',
              label: 'small_Image',
              type: 'checkbox',
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
                  name: 'description',
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
          slug: 'cta-section',
          labels: {
            singular: 'CTA Section',
            plural: 'CTA Sections',
          },
          fields: [
            {
              name: 'show_section',
              label: 'Show cta-section Section',
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
        },
      ],
    },
  ],
}
