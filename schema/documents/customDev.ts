import { defineField, defineType } from 'sanity'
export const customDev = defineType({
  name: 'customDev',
  title: 'Developer component',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'title' },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
        name: 'information', 
        type: 'richText', 
        title: 'Information',
    }),
  ],
    preview: {
  select: {
    title: 'title',
    slug: 'slug'
  },
  prepare({ title, slug }) {
    return {
      title,
      subtitle: `Slug: ${slug.current}`
    }
  }
}
})