import type { CollectionConfig } from 'payload'
// menu items
export const Menus: CollectionConfig = {
  slug: 'menus',
  admin: {
    useAsTitle: 'title',
  },
  labels: {
    singular: 'Menu',
    plural: 'Menus',
  },
  fields: [
    {
      name: 'title',
      label: 'Menu Title',
      type: 'text',
      required: true,
    },
    {
      name: 'items',
      label: 'Menu Items',
      type: 'array',
      minRows: 1,
      fields: [
        {
          name: 'label',
          label: 'Item Label',
          type: 'text',
        },
        {
          name: 'url',
          label: 'Item URL',
          type: 'text',
        },
        {
          name: 'children',
          label: 'Sub Menu Items',
          type: 'array',
          fields: [
            {
              name: 'label',
              label: 'Sub Item Label',
              type: 'text',
            },
            {
              name: 'url',
              label: 'Sub Item URL',
              type: 'text',
            },
          ],
        },
      ],
    },
  ],
}
