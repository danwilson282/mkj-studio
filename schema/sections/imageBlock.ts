import { defineType, defineField } from 'sanity';

type radius = "none" | "sm" | "md" | "lg" | "full"
type shadow = "none" | "sm" | "md" | "lg"
const borderRadiusOptions: radius[] = ["none", "sm", "md", "lg", "full"];
const boxShadowOptions: shadow[] = ["none", "sm", "md", "lg"];
export default defineType({
  name: 'imageBlock',
  type: 'object',
  title: 'Image',
    groups: [
    { name: 'content', title: 'Content', default: true },
    { name: 'style', title: 'Styling' },
  ],
  fields: [
    defineField({
        name: 'title', 
        type: 'string', 
        title: 'Title',
        group: 'content'
    }),
    defineField({
        name: 'image', 
        type: 'image', 
        title: 'Image source',
        group: 'content'
    }),
    defineField({
      name: 'width',
      title: 'Width (px)',
      description: 'Set either served width or height to maintain aspect ratio. Setting both will stretch the image',
      type: 'number',
      group: 'content'
    }),
    defineField({
      name: 'height',
      title: 'Height (px)',
      description: 'Set either served width or height to maintain aspect ratio. Setting both will stretch the image',
      type: 'number',
      group: 'content'
    }),
    defineField({
      name: 'radius',
      title: 'Border radius',
      type: 'string',
      options: {
        list: borderRadiusOptions.map((radius) => ({
          title: radius,
          value: radius,
        })),
        layout: 'radio',
        direction: 'horizontal',
      },
      group: 'content'
    }),
    defineField({
      name: 'shadow',
      title: 'Shadow',
      type: 'string',
      options: {
        list: boxShadowOptions.map((shadow) => ({
          title: shadow,
          value: shadow,
        })),
        layout: 'radio',
        direction: 'horizontal',
      },
      group: 'content'
    }),
    defineField({
      name: "zoom",
      title: "Zoom on hover",
      type: "boolean",
      initialValue: false,
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
      title: 'title',
    },
    prepare(selection) {
      const { title} = selection;
      return {
        title: title,
      };
    },
  },
});
