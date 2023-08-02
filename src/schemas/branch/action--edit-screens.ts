import { ActionSchema } from "../../framework/schemas";

export const branchAction_editScreens: ActionSchema = {
  type: "action",
  fields: {
    screens: {
      typeDef: {
        type: "entity",
        class: "Screen",
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
    screens: {
      component: "EntityTable_FormField",
      attributes: {
        label: "Screens",
        target: "screens",
      },
    },
  },
};
