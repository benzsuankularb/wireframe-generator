import { ActionSchema } from "../../framework/schema";

export const event_editContents: ActionSchema = {
  type: "action",
  fields: {
    contents: {
      docs: [
        "List of contents included in the event.",
        "Only active content will be shown in the list.",
      ],
      typeDef: {
        type: "array",
        itemTypeDef: {
          type: "entity",
          class: "Content",
          fields: {
            name: {
              type: "string",
            },
          },
        },
      },
    },
  },
  layout: {
    contents: {
      component: "EntityMultiPicker_FormField",
      attributes: {
        searchable: true,
        label: "Contents",
      },
    },
  },
};
