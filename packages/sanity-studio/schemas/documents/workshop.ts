import { defineField, defineType } from 'sanity'
import { DocumentTextIcon } from '@sanity/icons'

export default defineType({
  name: 'workshop',
  title: 'کارگاه',
  type: 'document',
  icon: DocumentTextIcon,
  fields: [
    defineField({
      name: 'title',
      title: 'عنوان',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'chapterNumber',
      title: 'شماره فصل',
      type: 'number',
      validation: (Rule) => Rule.required().min(1).max(16),
    }),
    defineField({
      name: 'description',
      title: 'توضیحات',
      type: 'text',
      rows: 4,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'pdfFile',
      title: 'فایل PDF',
      type: 'file',
      options: {
        accept: 'application/pdf',
      },
      description: 'فایل PDF قالب کارگاه',
    }),
    defineField({
      name: 'instructions',
      title: 'دستورالعمل‌ها',
      type: 'array',
      of: [{ type: 'block' }],
      description: 'راهنمای گام به گام برای انجام کارگاه',
    }),
    defineField({
      name: 'order',
      title: 'ترتیب نمایش',
      type: 'number',
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: {
      title: 'title',
      chapterNumber: 'chapterNumber',
    },
    prepare({ title, chapterNumber }) {
      return {
        title: title,
        subtitle: `فصل ${chapterNumber}`,
      }
    },
  },
})