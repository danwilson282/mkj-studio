// schemas/documents/siteSettings.ts
export default {
  name: 'header',
  title: 'Header',
  type: 'document',
  __experimental_actions: ['update', 'publish'], // 👈 disables create & delete
  fields: [
    {
      name: 'siteTitle',
      title: 'Site Title',
      type: 'string',
    },
    // Add more global fields as needed
  ],
}
