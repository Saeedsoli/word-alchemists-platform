import { defineField, defineType } from 'sanity'
import { ImageIcon } from '@sanity/icons'

export default defineType({
  name: 'diagram',
  title: 'دیاگرام',
  type: 'document',
  icon: ImageIcon,
  fields: [
    defineField({
      name: 'title',
      title: 'عنوان',
      type: 'string',
      validation: (Rule) => Rule.required().max(100),
      description: 'نام دیاگرام (مثال: The Word Alchemy Framework)',
    }),
    defineField({
      name: 'slug',
      title: 'Slug (برای URL)',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
      description: 'برای آدرس صفحه استفاده می‌شود (مثال: framework)',
    }),
    defineField({
      name: 'chapterNumber',
      title: 'شماره فصل',
      type: 'number',
      validation: (Rule) => Rule.required().min(1).max(16),
      description: 'این دیاگرام مربوط به کدام فصل است؟',
    }),
    defineField({
      name: 'description',
      title: 'توضیحات',
      type: 'text',
      rows: 4,
      validation: (Rule) => Rule.required().max(500),
      description: 'توضیح کوتاه درباره این دیاگرام',
    }),
    defineField({
      name: 'image',
      title: 'تصویر دیاگرام',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'alt',
          title: 'متن جایگزین (Alt Text)',
          type: 'string',
          validation: (Rule) => Rule.required(),
          description: 'برای SEO و دسترسی‌پذیری',
        },
      ],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'order',
      title: 'ترتیب نمایش',
      type: 'number',
      description: 'برای مرتب کردن دیاگرام‌ها در گالری',
      validation: (Rule) => Rule.required().min(1),
    }),
    defineField({
      name: 'publishedAt',
      title: 'تاریخ انتشار',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
    }),
  ],
  preview: {
    select: {
      title: 'title',
      chapterNumber: 'chapterNumber',
      media: 'image',
    },
    prepare({ title, chapterNumber, media }) {
      return {
        title: title,
        subtitle: `فصل ${chapterNumber}`,
        media: media,
      }
    },
  },
  orderings: [
    {
      title: 'شماره فصل',
      name: 'chapterNumberAsc',
      by: [{ field: 'chapterNumber', direction: 'asc' }],
    },
    {
      title: 'ترتیب نمایش',
      name: 'orderAsc',
      by: [{ field: 'order', direction: 'asc' }],
    },
  ],
})