// schemas/documents/siteSettings.ts
export default {
  name: 'navigation',
  title: 'Navigation',
  type: 'document',
  __experimental_actions: ['update', 'publish'], // 👈 disables create & delete
  fields: [
    {
      name: 'navLinks',
      title: 'Navigation Links',
      type: 'string',
    },
    // Add more global fields as needed
  ],
}
