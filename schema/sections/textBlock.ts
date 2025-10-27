import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'textBlock',
  type: 'object',
  title: 'Text Block',
    groups: [
    { name: 'content', title: 'Content', default: true },
    { name: 'style', title: 'Styling' },
  ],
  fields: [
    defineField({
        name: 'title', 
        type: 'string', 
        title: 'Title',
        group: 'content'
    }),
    defineField({
        name: 'content', 
        type: 'richText', 
        title: 'Content',
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
