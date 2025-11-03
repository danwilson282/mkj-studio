// schemas/page.js
import { defineType, defineField } from 'sanity';
import sections from '../sections';
import columnStructure from '../sections/columnStructure';
import RequiresLoginInput from '../components/RequiresLoginInput'
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
  groups: [
    { name: 'content', title: 'Content', default: true },
    { name: 'style', title: 'Styling' },
    { name: 'settings', title: 'Page Settings' },
  ],
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      title: 'Page Title',
      validation: (Rule) => Rule.required(),
      group: 'content'
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
      group: 'content'
    }),
    defineField({
      name: 'parent',
      type: 'reference',
      to: [{ type: 'page' }],
      title: 'Parent Page',
      description: 'Leave blank for top-level pages',
      group: 'content'
    }),
    defineField({
      name: 'sections',
      type: 'array',
      title: 'Page Sections',
      of: [
        ...getSectionTypes(),
        {
          type: "reference",
          to: [{type: "customDev"}]
        }
      ], // Dynamically generate the array
      group: 'content'
    }),
    defineField({
      name: 'requiresLogin',
      title: 'Requires Login',
      type: 'boolean',
      components: {
        input: RequiresLoginInput
      },
      group: 'settings'
    }),
    defineField({
      name: 'hideFromNav',
      title: 'Hide this page from navigation',
      type: 'boolean',
      initialValue: false,
      group: 'settings'
    }),
    defineField({
      name: 'pageMeta',
      type: 'pageMeta',
      group: 'settings'
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
    requiresLogin: 'requiresLogin'
  },
  prepare({ title, requiresLogin }) {
    return {
      title,
      subtitle: requiresLogin ? '🔒 Login required' : 'Public page'
    }
  }
}
});
