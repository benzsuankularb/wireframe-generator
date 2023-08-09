import { SelectorSchema } from "../../framework/schemas";

export const priceCardSelector_edit: SelectorSchema = {
  type: "selector",
  fields: {},
  actions: {
    priceCardAction_editGeneralInfo: {},
    priceCardAction_editPricing: {},
    priceCardAction_editDealRestrictions: {},
    priceCardAction_editSessionSuggestions: {},
  },
  layout: {
    component: "EntityEdit",
    attributes: {
      sections: [
        {
          name: "General Info",
          schema: "priceCardAction_editGeneralInfo",
        },
        {
          name: "Pricing",
          schema: "priceCardAction_editPricing",
        },
        {
          name: "Deal Restrictions",
          schema: "priceCardAction_editDealRestrictions",
        },
        {
          name: "Session Suggestions",
          schema: "priceCardAction_editSessionSuggestions",
        },
      ],
    },
  },
};
