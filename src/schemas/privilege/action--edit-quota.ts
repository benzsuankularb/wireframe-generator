import { ActionSchema } from "../../framework/schemas";

export const privilegeAction_editQuota: ActionSchema = {
  type: "action",
  fields: {
    usageLimit: {
      typeDef: {
        type: "number",
      },
    },
  },
  layout: {
    usageLimit: {
      component: "Number_FormField",
      attributes: {
        label: "Usage Limit",
        target: "usageLimit",
      },
    },
  },
};
