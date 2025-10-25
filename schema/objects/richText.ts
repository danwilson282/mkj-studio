// schemas/portableTextWithIcons.ts
import {defineType, defineArrayMember, defineField} from "sanity";

export default defineType({
  name: "richText",
  title: "Rich text",
  type: "array",
  of: [
    defineArrayMember({
      type: "block",
      marks: {
        decorators: [
          { title: "Strong", value: "strong" },
          { title: "Emphasis", value: "em" },
        ],
        annotations: [
          {
            name: "icon",
            type: "object",
            title: "Icon",
            fields: [
              {
                name: "iconName",
                type: "string",
                title: "Icon Name",
                description: "Name of the React Icon (e.g., MdCheck, FaBeer)",
              },
              {
                name: "iconLibrary",
                type: "string",
                title: "Icon Library",
                options: {
                  list: [
                    { title: "Material Design (md)", value: "md" },
                    { title: "Font Awesome (fa)", value: "fa" },
                    { title: "Feather (fi)", value: "fi" },
                  ],
                  layout: "dropdown",
                },
              },
            ],
          },
        ],
      },
    }),
  ],
});