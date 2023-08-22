import { SelectorSchema } from "../../framework/schemas";

export const ticketSalePresetSelector_editLayout: SelectorSchema = {
  type: "selector",
  fields: {},
  actions: {
    ticketSalePresetAction_editActivation: {},
    ticketSalePresetAction_editGeneralInfo: {},
    ticketSalePresetAction_editSessionScopes: {},
    ticketSalePresetAction_editLayout: {},
  },
  layout: {
    component: "EntityEdit",
    attributes: {
      sections: [
        {
          name: "Activation",
          schema: "ticketSalePresetAction_editActivation",
        },
        {
          name: "General Info",
          schema: "ticketSalePresetAction_editGeneralInfo",
        },
        {
          name: "Session Scopes",
          schema: "ticketSalePresetAction_editSessionScopes",
        },
        {
          name: "Layout",
          schema: "ticketSalePresetAction_editLayout",
        },
      ],
    },
  },
};
