import {TagIcon} from '@sanity/icons'
import {defineField, defineType} from 'sanity'

export const testType = defineType({
  name: 'test',
  title: 'Test',
  type: 'document',
  icon: TagIcon,
  fields: [
    defineField({
      name: 'title',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      options: {
        source: 'title',
      },
    }),
    defineField({
      name: 'description',
      type: 'text',
    }),
    defineField({
        name: 'image',
        type: 'image',
        options: {
          hotspot: true,
        },
      }),
  ],
})
