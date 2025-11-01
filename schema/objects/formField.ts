import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'formField',
  title: 'Form Field',
  type: 'object',
  fields: [
    defineField({
      name: 'label',
      title: 'Label',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'name',
      title: 'Field Name (HTML name attribute)',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'type',
      title: 'Field Type',
      type: 'string',
      options: {
        list: [
          { title: 'Text', value: 'text' },
          { title: 'Email', value: 'email' },
          { title: 'Password', value: 'password' },
          { title: 'Number', value: 'number' },
          { title: 'Select', value: 'select' },
          { title: 'Textarea', value: 'textarea' },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'required',
      title: 'Required',
      type: 'boolean',
      initialValue: true,
    }),
    defineField({
      name: 'options',
      title: 'Select Options (for dropdowns)',
      type: 'array',
      of: [{ type: 'string' }],
      hidden: ({ parent }) => parent?.type !== 'select',
    }),
    defineField({
      name: 'placeholder',
      title: 'Placeholder Text',
      type: 'string',
    }),
  ],
})