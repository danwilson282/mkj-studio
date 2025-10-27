import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'hero',
  type: 'object',
  title: 'Hero Banner',
  groups: [
    { name: 'content', title: 'Content', default: true },
    { name: 'style', title: 'Styling' },
  ],
  fields: [
    defineField({
      name: 'heading',
      type: 'string',
      title: 'Heading',
      validation: (Rule) => Rule.required(),
      group: 'content'
    }),
    defineField({
      name: 'tagline',
      type: 'string',
      title: 'Tagline',
      group: 'content'
    }),
    defineField({
      name: 'image',
      type: 'image',
      title: 'Background Image',
      options: { hotspot: true },
      group: 'content'
    }),
    defineField({
      name: 'layout',
      type: 'layout',
      group: 'style'
    }),
  ],
  preview: {
    select: {
      heading: 'heading',
      image: 'image',
    },
    prepare(selection) {
      const { heading, image } = selection;
      return {
        title: heading,
        media: image,
      };
    },
  },
});