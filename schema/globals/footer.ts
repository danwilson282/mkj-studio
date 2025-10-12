// schemas/documents/siteSettings.ts
export default {
  name: 'footer',
  title: 'Footer',
  type: 'document',
  __experimental_actions: ['update', 'publish'], // 👈 disables create & delete
  fields: [
    {
      name: 'footerText',
      title: 'Footer Text',
      type: 'string',
    },
    // Add more global fields as needed
  ],
}
