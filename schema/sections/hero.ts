import { defineType } from 'sanity';

export default defineType({
  name: 'hero',
  type: 'object',
  title: 'Hero Banner',
  fields: [
    {
      name: 'heading',
      type: 'string',
      title: 'Heading',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'tagline',
      type: 'string',
      title: 'Tagline',
    },
    {
      name: 'image',
      type: 'image',
      title: 'Background Image',
      options: { hotspot: true },
    },
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