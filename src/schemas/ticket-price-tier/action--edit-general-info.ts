import { ActionSchema } from "../../framework/schemas";

export const ticketPriceTierAction_editGeneralInfo: ActionSchema = {
  type: "action",
  fields: {
    name: {
      typeDef: {
        type: "string",
      },
    },
    description: {
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
    description: {
      component: "Text_FormField",
      size: "1/2",
      attributes: {
        multiline: true,
        label: "Description",
        target: "description",
      },
    },
  },
};
