import { SelectorSchema } from "../../framework/schemas";

export const ticketTypeSelector_edit: SelectorSchema = {
  type: "selector",
  fields: {},
  schemas: {
    ticketTypeAction_editGeneralInfo: {},
    ticketTypeAction_editPricing: {},
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
      ],
    },
  },
};
