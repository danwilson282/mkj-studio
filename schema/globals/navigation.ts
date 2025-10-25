// schemas/documents/siteSettings.ts
export default {
  name: 'navigation',
  title: 'Navigation',
  type: 'document',
  __experimental_actions: ['update', 'publish'], // 👈 disables create & delete
  fields: [
        {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'navLinks',
      title: 'Navigation Links',
      type: 'array',
      of: [{
        type: "link"
      }]
    },
    // Add more global fields as needed
  ],
}
