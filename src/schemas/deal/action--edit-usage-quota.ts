import { ActionSchema } from "../../framework/schemas";

export const dealAction_editUsageQuota: ActionSchema = {
  type: "action",
  fields: {
    global: {
      typeDef: {
        type: "number",
      },
    },
    perOrder: {
      typeDef: {
        type: "number",
      },
    },
    perContent: {
      typeDef: {
        type: "number",
      },
    },
    perPerson: {
      typeDef: {
        type: "number",
      },
    },
  },
  layout: {
    global: {
      component: "Number_FormField",
      attributes: {
        label: "Global",
        target: "global",
      },
    },
    perOrder: {
      component: "Number_FormField",
      attributes: {
        label: "Per Order",
        target: "perOrder",
      },
    },
    perContent: {
      component: "Number_FormField",
      attributes: {
        label: "Per Content",
        target: "perContent",
      },
    },
    perPerson: {
      component: "Number_FormField",
      attributes: {
        label: "Per Person",
        target: "perPerson",
      },
    },
  },
};
