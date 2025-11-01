import { defineField, defineType } from 'sanity'
import RequiresLoginInput from '../components/RequiresLoginInput'
export const form = defineType({
  name: 'form',
  title: 'Forms',
  type: 'document',
    groups: [
    { name: 'content', title: 'Content', default: true },
    { name: 'style', title: 'Styling' },
    { name: 'settings', title: 'Page Settings' },
  ],
  fields: [
    defineField({
      name: 'title',
      title: 'Form Title',
      type: 'string',
      group: 'content'
    }),
    defineField({
        name: 'intro', 
        type: 'richText', 
        title: 'Intro text',
        group: 'content'
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'title' },
      group: 'content'
    }),
    defineField({
      name: 'fields',
      title: 'Form Fields',
      type: 'array',
      of: [{ type: 'formField' }],
      group: 'content'
    }),
    defineField({
      name: 'submitText',
      title: 'Submit Button Text',
      type: 'string',
      initialValue: 'Submit',
      group: 'content'
    }),
    defineField({
      name: 'submittedText',
      title: 'Post submit message',
      type: 'string',
      initialValue: 'Form submitted successfully',
      group: 'content'
    }),
    defineField({
        name: 'outro', 
        type: 'richText', 
        title: 'Foot text',
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
      subtitle: requiresLogin ? '🔒 Login required' : 'Public form'
    }
  }
}
})