import { ActionSchema } from "../../framework/schemas";

export const eventAction_editContents: ActionSchema = {
  type: "action",
  fields: {
    contents: {
      required: true,
      typeDef: {
        type: "entity",
        class: "Content",
        displayFormat: "%name",
        fields: {
          name: {
            type: "string",
          },
        },
      },
    },
  },
  layout: {
    contents: {
      component: "EntityMultiPicker_FormField",
      attributes: {
        label: "Contents",
      },
    },
  },
};
