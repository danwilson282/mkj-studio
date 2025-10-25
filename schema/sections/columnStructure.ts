// schemas/sections/columnLayout.js
import { defineType, defineField } from 'sanity';
import sections from '.';
// Helper function to filter section types, excluding column layouts
const getSectionTypes = () => {
  // Filter schemas to include only objects intended for pageBuilder
  const allSchemas = sections; // You'll need to make this available (see below)
  return allSchemas
    .filter((schema) => schema.type === 'object') // Exclude non-section objects
    .map((schema) => ({ type: schema.name }));
};

export default defineType({
  name: 'columnLayout',
  type: 'object',
  title: 'Column Layout',
  icon: () => '📐',
  fields: [
    defineField({
      name: 'columns',
      type: 'array',
      title: 'Columns',
      of: [
        {
          type: 'object',
          name: 'column',
          title: 'Column',
          fields: [
            defineField({
              name: 'width',
              type: 'string',
              title: 'Column Width',
              options: {
                list: [
                  { title: '1/2 (50%)', value: 'half' },
                  { title: '1/3 (33%)', value: 'third' },
                  { title: '2/3 (66%)', value: 'two-thirds' },
                  { title: '1/4 (25%)', value: 'quarter' },
                  { title: '3/4 (75%)', value: 'three-quarters' },
                  { title: 'Full (100%)', value: 'full' },
                ],
              },
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'gap',
              type: 'string',
              title: 'Spacing Between Columns',
              options: {
                list: [
                  { title: 'None', value: 'none' },
                  { title: 'Small', value: 'small' },
                  { title: 'Medium', value: 'medium' },
                  { title: 'Large', value: 'large' },
                ],
              },
              initialValue: 'medium',
            }),
            defineField({
              name: 'sections',
              type: 'array',
              title: 'Column Sections',
              of: getSectionTypes(),
            }),
          ],
          preview: {
            select: {
              width: 'width',
              sections: 'sections',
            },
            prepare(selection) {
              const { width, sections } = selection;
              const sectionsCount = sections?.length || 0;
              return {
                title: `Column - ${width}`,
                subtitle: `${sectionsCount || 0} section(s)`,
              };
            },
          },
        },
      ],
      validation: (Rule) => Rule.required().min(1),
    }),
    defineField({
      name: 'alignment',
      type: 'string',
      title: 'Vertical Alignment',
      options: {
        list: [
          { title: 'Top', value: 'top' },
          { title: 'Center', value: 'center' },
          { title: 'Bottom', value: 'bottom' },
          { title: 'Stretch', value: 'stretch' },
        ],
      },
      initialValue: 'top',
    }),
  ],
  preview: {
    select: {
      columns: 'columns',
    },
    prepare(selection) {
      const { columns } = selection;
      const columnsCount = columns?.length || 0;
      return {
        title: 'Column Layout',
        subtitle: `${columnsCount} column(s)`,
      };
    },
  },
});