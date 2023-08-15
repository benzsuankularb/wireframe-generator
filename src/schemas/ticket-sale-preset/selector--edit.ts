import { SelectorSchema } from "../../framework/schemas";

export const ticketSalePresetSelector_edit: SelectorSchema = {
  type: "selector",
  fields: {},
  actions: {
    ticketSalePresetAction_editActivation: {},
    ticketSalePresetAction_editGeneralInfo: {},
    ticketSalePresetAction_editPriceCards: {},
    ticketSalePresetAction_editDealRestrictions: {},
    ticketSalePresetAction_editSaleRestrictions: {},
    ticketSalePresetAction_editSessionScopes: {},
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
          name: "Sale Restrictions",
          schema: "ticketSalePresetAction_editSaleRestrictions",
        },
        {
          name: "Deal Restrictions",
          schema: "ticketSalePresetAction_editDealRestrictions",
        },
        {
          name: "Price Cards",
          schema: "ticketSalePresetAction_editPriceCards",
        },
      ],
    },
  },
};
