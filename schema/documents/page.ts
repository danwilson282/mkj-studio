// schemas/page.js
import { defineType, defineField } from 'sanity';
import sections from '../sections';
// Helper function to filter section types
const getSectionTypes = () => {
  // Filter schemas to include only objects intended for pageBuilder
  const allSchemas = sections; // You'll need to make this available (see below)
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
      options: { source: 'title' },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'sections',
      type: 'array',
      title: 'Page Sections',
      of: getSectionTypes(), // Dynamically generate the array
    }),
  ],
});