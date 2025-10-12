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
    {
      name: 'logo',
      title: 'Site logo',
      type: 'image',
    },
    {
      name: 'backgroundColour',
      title: 'Background Colour',
      type: 'color'
    },
    // Add more global fields as needed
  ],
}
