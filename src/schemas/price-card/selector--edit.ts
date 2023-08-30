import { SelectorSchema } from "../../framework/schemas";

export const priceCardSelector_edit: SelectorSchema = {
  type: "selector",
  fields: {},
  actions: {
    priceCardAction_editActivation: {},
    priceCardAction_editGeneralInfo: {},
    priceCardAction_editPricing: {},
    priceCardAction_editDealRestrictions: {},
  },
  layout: {
    component: "EntityEdit",
    attributes: {
      sections: [
        {
          name: "Activation",
          schema: "priceCardAction_editActivation",
        },
        {
          name: "General Info",
          schema: "priceCardAction_editGeneralInfo",
        },
        {
          name: "Deal Restrictions",
          schema: "priceCardAction_editDealRestrictions",
        },
        {
          name: "Pricing",
          schema: "priceCardAction_editPricing",
        },
      ],
    },
  },
};
