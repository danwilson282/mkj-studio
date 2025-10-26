import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'hero',
  type: 'object',
  title: 'Hero Banner',
  fields: [
    defineField({
      name: 'heading',
      type: 'string',
      title: 'Heading',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'tagline',
      type: 'string',
      title: 'Tagline',
    }),
    defineField({
      name: 'image',
      type: 'image',
      title: 'Background Image',
      options: { hotspot: true },
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