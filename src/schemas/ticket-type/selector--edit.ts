import { SelectorSchema } from "../../framework/schemas";

export const ticketTypeSelector_edit: SelectorSchema = {
  type: "selector",
  fields: {},
  actions: {
    ticketTypeAction_editGeneralInfo: {},
    ticketTypeAction_editPricing: {},
    ticketTypeAction_editConcessions: {},
  },
  layout: {
    component: "EntityEdit",
    attributes: {
      sections: [
        {
          name: "General Info",
          schema: "ticketTypeAction_editGeneralInfo",
        },
        {
          name: "Default Pricing",
          schema: "ticketTypeAction_editPricing",
        },
        {
          name: "Concessions",
          schema: "ticketTypeAction_editConcessions",
        },
      ],
    },
  },
};
