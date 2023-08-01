import { ActionSchema } from "../../framework/schemas";

export const screenAction_editLayouts: ActionSchema = {
  type: "action",
  fields: {
    layouts: {
      typeDef: {
        type: "entity",
        class: "ScreenLayout",
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
    layouts: {
      component: "EntityTable_FormField",
      attributes: {
        label: "Layouts",
      },
      docs: ["Click on the item to open the layout manager"],
      target: "layouts",
    },
  },
};
