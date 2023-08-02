import { ActionSchema } from "../../framework/schemas";

export const ticketTypeAction_editGeneralInfo: ActionSchema = {
  type: "action",
  fields: {
    name: {
      typeDef: {
        type: "string",
      },
    },
  },
  layout: {
    name: {
      component: "Text_FormField",
      size: "1/2",
      attributes: {
        label: "Name",
        target: "name",
      },
    },
  },
};
