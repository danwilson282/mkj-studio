import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'pageMeta',
  title: 'Page metadata',
  type: 'object',
  fields: [
    defineField({
      name: 'metaTitle',
      type: 'string',
      title: 'Page Title',
    }),
    defineField({
      name: 'metaDescription',
      type: 'string',
      title: 'Page Description',
    }),
    defineField({
      name: 'canonicalUrl',
      type: 'url',
      title: 'Canonical URL',
      description: 'Preferred URL for SEO (must be a full URL)',
    }),
    defineField({
      name: 'metaKeywords',
      type: 'array',
      title: 'Meta Keywords',
      of: [{ type: 'string' }],
      description: 'Comma-separated keywords for SEO (optional, less important nowadays)',
    }),
    defineField({
      name: 'noIndex',
      type: 'boolean',
      title: 'No Index',
      description: 'Prevent this page from being indexed by search engines',
      initialValue: false,
    }),
    defineField({
      name: 'noFollow',
      type: 'boolean',
      title: 'No Follow',
      description: 'Prevent search engines from following links on this page',
      initialValue: false,
    }),
    defineField({
      name: 'openGraphImage',
      type: 'image',
      title: 'Open Graph Image',
      description: 'Image used when sharing on social media',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'openGraphTitle',
      type: 'string',
      title: 'Open Graph Title',
      description: 'Overrides meta title for social sharing',
    }),
    defineField({
      name: 'openGraphDescription',
      type: 'string',
      title: 'Open Graph Description',
      description: 'Overrides meta description for social sharing',
    }),
  ],
});
