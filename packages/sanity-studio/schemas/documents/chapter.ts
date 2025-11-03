import { defineField, defineType } from 'sanity'
import { BookIcon } from '@sanity/icons'

export default defineType({
  name: 'chapter',
  title: 'فصل',
  type: 'document',
  icon: BookIcon,
  fields: [
    defineField({
      name: 'title',
      title: 'عنوان',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'chapterNumber',
      title: 'شماره فصل',
      type: 'number',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'subtitle',
      title: 'زیرعنوان',
      type: 'string',
    }),
    defineField({
      name: 'content',
      title: 'محتوا',
      type: 'array',
      of: [
        {
          type: 'block',
          styles: [
            { title: 'Normal', value: 'normal' },
            { title: 'H2', value: 'h2' },
            { title: 'H3', value: 'h3' },
            { title: 'Quote', value: 'blockquote' },
          ],
          marks: {
            decorators: [
              { title: 'Bold', value: 'strong' },
              { title: 'Italic', value: 'em' },
            ],
          },
        },
        {
          type: 'image',
          options: { hotspot: true },
          fields: [
            {
              name: 'alt',
              type: 'string',
              title: 'Alternative text',
            },
          ],
        },
      ],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'isSecret',
      title: 'آیا مخفی است؟',
      type: 'boolean',
      initialValue: false,
      description: 'فصل‌های مخفی فقط از طریق لینک خاص قابل دسترسی هستند',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      chapterNumber: 'chapterNumber',
      isSecret: 'isSecret',
    },
    prepare({ title, chapterNumber, isSecret }) {
      return {
        title: `فصل ${chapterNumber}: ${title}`,
        subtitle: isSecret ? '🔒 مخفی' : '📖 عمومی',
      }
    },
  },
})