// schemas/icon.ts
import { defineType, defineField } from 'sanity';
import DynamicIconPicker from '../components/DynamicIconPicker';

export default defineType({
  name: 'icon',
  type: 'object',
  title: 'Icon Picker',
    groups: [
    { name: 'content', title: 'Content', default: true },
    { name: 'style', title: 'Styling' },
  ],
  fields: [
    defineField({
      name: 'heading',
      type: 'string',
      title: 'Title',
      validation: (Rule) => Rule.required(),
      group: 'content'
    }),
    defineField({
      name: 'icon',
      type: 'string',
      title: 'Icon',
      components: {
        input: DynamicIconPicker
      },
      validation: (Rule) => Rule.required(),
      group: 'content'
    }),
    defineField({
      name: 'colour',
      type: 'color',
      title: 'Colour',
      group: 'content'
    }),
    defineField({
      name: 'size',
      type: 'number',
      title: 'Size',
      group: 'content'
    }),
    defineField({
      name: 'layout',
      type: 'layout',
      group: 'style'
    }),
  ],
});
