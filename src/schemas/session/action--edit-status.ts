import { ActionSchema } from "../../framework/schemas";

export const sessionAction_editStatus: ActionSchema = {
  type: "action",
  fields: {
    status: {
      allowBulk: true,
      typeDef: {
        type: "string",
        enum: ["open", "plan", "inactive", "closed"],
      },
    },
  },
  layout: {
    status: {
      component: "ValuePicker_FormField",
      attributes: {
        label: "Status",
        values: {
          plan: "Plan",
          open: "Open",
          inactive: "Inactive",
          closed: "Closed",
        },
        target: "status",
      },
      docs: ["Readonly in program manager"],
    },
  },
};
