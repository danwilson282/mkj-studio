import { defineType, defineField } from 'sanity';
import DynamicIconPicker from '../components/DynamicIconPicker';
import type { ObjectInputProps } from 'sanity';
// import * as FaIcons from 'react-icons/fa';
export default defineType({
  name: 'icon',
  type: 'object',
  title: 'Icon Picker',
  fields: [
    defineField({
      name: 'heading',
      type: 'string',
      title: 'Title',
    }),
    defineField({
      name: 'icon',
      type: 'string',
      title: 'Icon',
    }),
    defineField({
      name: 'colour',
      type: 'string',
      title: 'Colour',
    }),
    defineField({
      name: 'size',
      type: 'number',
      title: 'Size',
    }),
  ],
components: {
  input: DynamicIconPicker as React.ComponentType<ObjectInputProps<Record<string, any>>>
},
  // preview: {
  // select: {
  //   heading: 'heading',
  //   icon: 'icon',
  //   color: 'color',
  //   size: 'size',
  // },
  //   prepare(selection) {
  //     const { heading, icon, color, size } = selection;
  //      const IconComp = FaIcons[icon as keyof typeof FaIcons];
  //      const iconSize = Number(size) || 24;
  //     return {
  //       title: heading,
  //       media: <IconComp color={color || '#000'} size={iconSize} /> : null,
  //     };
  //   },
  // },
});