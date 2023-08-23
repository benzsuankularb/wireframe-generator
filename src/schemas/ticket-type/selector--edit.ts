import { SelectorSchema } from "../../framework/schemas";

export const ticketTypeSelector_edit: SelectorSchema = {
  type: "selector",
  fields: {},
  actions: {
    ticketTypeAction_editGeneralInfo: {},
    ticketTypeAction_editServices: {},
    ticketTypeAction_editBreakdown: {},
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
          name: "Breakdown",
          schema: "ticketTypeAction_editBreakdown",
        },
      ],
    },
  },
};
