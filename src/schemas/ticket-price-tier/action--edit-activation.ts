import { ActionSchema } from "../../framework/schemas";

export const ticketPriceTierAction_editActivation: ActionSchema = {
  type: "action",
  fields: {
    enable: {
      typeDef: {
        type: "boolean",
      },
    },
  },
  layout: {
    name: {
      component: "Toggle_FormField",
      size: "1/2",
      attributes: {
        label: "Enable",
        target: "enable",
      },
    },
  },
};
