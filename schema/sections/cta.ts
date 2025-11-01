import { defineType, defineField } from 'sanity';
type colour = "primary" | "secondary"
type size = "sm" | "md" | "lg"
type variant = "filled" | "outlined"
const sizeOptions: size[] = ["sm", "md", "lg"];
const variantOptions: variant[] = ["filled", "outlined"];
const colourOptions: colour[] = ["primary", "secondary"];

export default defineType({
  name: 'cta',
  type: 'object',
  title: 'Call to action',
  groups: [
    { name: 'content', title: 'Content', default: true },
    { name: 'style', title: 'Styling' },
  ],
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      title: 'Title (for studio only)',
      group: 'content'
    }),
    defineField({
      name: 'link',
      type: 'link',
      title: 'Button content',
      group: 'content'
    }),
    defineField({
      name: 'colour',
      type: 'string',
      title: 'Colour',
      options: {
        list: colourOptions.map((colour) => ({
          title: colour,
          value: colour,
        })),
        layout: 'radio',
        direction: 'horizontal',
      },
      group: 'content'
    }),    
    defineField({
      name: 'variant',
      type: 'string',
      title: 'Variant',
      options: {
        list: variantOptions.map((variant) => ({
          title: variant,
          value: variant,
        })),
        layout: 'radio',
        direction: 'horizontal',
      },      
      group: 'content'
    }),    
    defineField({
      name: 'size',
      type: 'string',
      title: 'Size',
      options: {
        list: sizeOptions.map((size) => ({
          title: size,
          value: size,
        })),
        layout: 'radio',
        direction: 'horizontal',
      },
      group: 'content'
    }),        
    defineField({
      name: 'layout',
      type: 'layout',
      group: 'style'
    }),
  ],
  preview: {
    select: {
      title: 'title'
    },
    prepare(selection) {
      const { title } = selection;
      return {
        title: title,
      };
    },
  },
});