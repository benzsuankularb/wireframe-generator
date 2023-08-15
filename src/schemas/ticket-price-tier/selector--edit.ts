import { SelectorSchema } from "../../framework/schemas";

export const ticketPriceTierSelector_edit: SelectorSchema = {
  type: "selector",
  fields: {},
  actions: {
    ticketPriceTierAction_editActivation: {},
    ticketPriceTierAction_editGeneralInfo: {},
  },
  layout: {
    component: "EntityEdit",
    attributes: {
      sections: [
        {
          name: "Activation",
          schema: "ticketPriceTierAction_editActivation",
        },
        {
          name: "General Info",
          schema: "ticketPriceTierAction_editGeneralInfo",
        },
      ],
    },
  },
};
