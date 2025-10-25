import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'textBlock',
  type: 'object',
  title: 'Text Block',
  fields: [
    defineField({
        name: 'title', 
        type: 'string', 
        title: 'Title'
    }),
    defineField({
        name: 'content', 
        type: 'richText', 
        title: 'Content'
    })
  ],
  preview: {
    select: {
      title: 'title',
    },
    prepare(selection) {
      const { title} = selection;
      return {
        title: title,
      };
    },
  },
});
