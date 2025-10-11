import { defineType } from 'sanity';

export default defineType({
  name: 'textBlock',
  type: 'object',
  title: 'Text Block',
  fields: [
    {
        name: 'title', 
        type: 'text', 
        title: 'Title'
    },
    {
        name: 'content', 
        type: 'text', 
        title: 'Content'
    },
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
