import { ActionSchema } from "../../framework/schemas";

export const contentAction_editActivation: ActionSchema = {
  type: "action",
  fields: {
    status: {
      typeDef: {
        type: "entity",
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
    status: {
      component: "EntityPicker_FormField",
      attributes: {
        label: "Status",
      },
      target: "status",
      docs: [
        "By setting inactive, Operator will unable to see and create the new sessions",
        "By setting inactive, Customer will unable to see in the website",
      ],
      samples: ["Active", "Inactive"],
    },
  },
};
