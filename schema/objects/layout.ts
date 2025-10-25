import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'layout',
  title: 'Layout Settings',
  type: 'object',
  fields: [
    defineField({
      name: 'padding',
      title: 'Padding',
      type: 'object',
      options: {
        columns: 2,
      },
      fields: [
        defineField({
          name: 'top',
          title: 'Top',
          type: 'string',
          options: {
            list: [
              { title: 'None', value: '0' },
              { title: 'Small (0.5rem)', value: '0.5rem' },
              { title: 'Medium (1rem)', value: '1rem' },
              { title: 'Large (2rem)', value: '2rem' },
              { title: 'X-Large (3rem)', value: '3rem' },
            ],
          },
        }),
        defineField({
          name: 'right',
          title: 'Right',
          type: 'string',
          options: {
            list: [
              { title: 'None', value: '0' },
              { title: 'Small (0.5rem)', value: '0.5rem' },
              { title: 'Medium (1rem)', value: '1rem' },
              { title: 'Large (2rem)', value: '2rem' },
              { title: 'X-Large (3rem)', value: '3rem' },
            ],
          },
        }),
        defineField({
          name: 'bottom',
          title: 'Bottom',
          type: 'string',
          options: {
            list: [
              { title: 'None', value: '0' },
              { title: 'Small (0.5rem)', value: '0.5rem' },
              { title: 'Medium (1rem)', value: '1rem' },
              { title: 'Large (2rem)', value: '2rem' },
              { title: 'X-Large (3rem)', value: '3rem' },
            ],
          },
        }),
        defineField({
          name: 'left',
          title: 'Left',
          type: 'string',
          options: {
            list: [
              { title: 'None', value: '0' },
              { title: 'Small (0.5rem)', value: '0.5rem' },
              { title: 'Medium (1rem)', value: '1rem' },
              { title: 'Large (2rem)', value: '2rem' },
              { title: 'X-Large (3rem)', value: '3rem' },
            ],
          },
        }),
      ],
    }),
    defineField({
      name: 'alignment',
      title: 'Alignment',
      type: 'string',
      options: {
        list: [
          { title: '◀ Left', value: 'start' },
          { title: '◼ Center', value: 'center' },
          { title: '▶ Right', value: 'end' },
        ],
        layout: 'radio',
      },
      description: 'Horizontal text/content alignment',
    }),
    defineField({
      name: 'justification',
      title: 'Justification',
      type: 'string',
      options: {
        list: [
          { title: '◀ Flex Start', value: 'justify-start' },
          { title: '◼ Center', value: 'justify-center' },
          { title: '▶ Flex End', value: 'justify-end' },
          { title: '◼ ◼ Space Between', value: 'justify-between' },
          { title: '◼   ◼   ◼ Space Around', value: 'justify-around' },
          { title: '◼  ◼  ◼  ◼ Space Evenly', value: 'justify-evenly' },
        ],
        layout: 'radio',
      },
      description: 'How flex items are distributed along the main axis (default y)',
    }),
    defineField({
      name: 'backgroundColor',
      title: 'Background Colour',
      type: 'object',
      options: {
        columns: 2,
      },
      fields: [
        defineField({
          name: 'colour',
          title: 'Colour',
          type: 'color'
        }),
        defineField({
          name: 'opacity',
          title: 'Opacity',
          type: 'number',
          validation: (Rule) => Rule.min(0).max(1),
          description: '0 = transparent, 1 = fully opaque',
        }),
      ],
    }),
  ],
  preview: {
    select: {
      alignment: 'alignment',
      justification: 'justification',
    },
    prepare(selection) {
      const { alignment, justification } = selection;
          return {
            title: 'Layout Settings',
            subtitle: `${alignment || 'Left'} aligned, ${justification || 'flex-start'} justified`,
            media: () => '🎨', // simple emoji or icon
        };
    },
  },
});