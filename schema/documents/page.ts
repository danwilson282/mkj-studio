// schemas/page.js
import { defineType, defineField } from 'sanity';
import sections from '../sections';
import columnStructure from '../sections/columnStructure';
// Helper function to filter section types
const getSectionTypes = () => {
  // Filter schemas to include only objects intended for pageBuilder
  const allSchemas = [...sections,columnStructure]; // You'll need to make this available (see below)
  return allSchemas
    .filter((schema) => schema.type === 'object') // Exclude non-section objects
    .map((schema) => ({ type: schema.name }));
};

export const page = defineType({
  name: 'page',
  type: 'document',
  title: 'Page',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      title: 'Page Title',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      options: {
        source: 'title',
        slugify: (input) =>
          input.toLowerCase().replace(/\s+/g, '-').replace(/[!?]/g, ''),
      },
    }),
    defineField({
      name: 'parent',
      type: 'reference',
      to: [{ type: 'page' }],
      title: 'Parent Page',
      description: 'Leave blank for top-level pages',
    }),
    defineField({
      name: 'sections',
      type: 'array',
      title: 'Page Sections',
      of: getSectionTypes(), // Dynamically generate the array
    }),
  ],
});
