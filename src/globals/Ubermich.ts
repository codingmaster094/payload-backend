import { GlobalConfig } from 'payload'
export const Ubermich: GlobalConfig = {
  slug: 'uber-mich',
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
      name: 'Erfahrung_und_Kompetenz',
      type: 'group',
      fields: [
        {
          name: 'show_section',
          label: 'Show Erfahrung_und_Kompetenz Section',
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
          name: 'Small_image',
          label: 'small_Image',
          type: 'checkbox',
        },
        {
            name: 'image',
            type: 'upload',
            relationTo: 'media'
          }
      ]
    },
    {
      name: 'Counter',
      type: 'group',
      fields: [
        {
          name: 'show_section',
          label: 'Show Counter Section',
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
            label: 'Counter Data',
            fields: [
                {
                name: 'count',
                type: 'text',  
                },
                {
                name: 'count_description',
                type: 'text',  
                }
            ]
        }
      ]
 },
    {
        name: 'Fort_und_Weiterbildungen',
        type: 'group',
        fields: [
          {
            name: 'show_section',
            label: 'Show Fort_und_Weiterbildungen Section',
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
            name: 'Small_image',
            label: 'small_Image',
            type: 'checkbox',
          },
          {
            name: 'image',
            type: 'upload',
            relationTo: 'media',
            required: true,
          }
        ],
      },
      {
        name: 'CTASection',
        type: 'group',
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
